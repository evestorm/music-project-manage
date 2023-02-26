import axios from 'axios';
import qs from 'qs';
import { ResponseStatusWords } from '../constants/http.constants';
import { ElMessage, ElLoading } from 'element-plus';

// 默认loading
const DEFAULT_LOADING = true;
let loading = undefined;
class HttpService {
	defaultRequestConfig = {
		withCredentials: false,
		timeout: 30000,
		showLoading: DEFAULT_LOADING,
	};
	defaultHeadersOption = {
		'Content-Type': 'application/json',
	};
	axios = axios;
	currentErrorStatus;

	constructor() {
		this.showLoading = this.defaultRequestConfig.showLoading ?? DEFAULT_LOADING;
		this.axios.interceptors.request.use(this.onRequestFulfilled, this.onRequestRejected);
		this.axios.interceptors.response.use(this.onResponseFulfilled, this.onResponseRejected);
	}

	setAuthorization(headerOptions) {
		const token = localStorage.getItem('token');
		if (token) {
			headerOptions['Authorization'] = token;
		}
		return headerOptions;
	}

	get(
		url,
		params = {},
		withToken = true,
		contentType = 'application/json',
		requestHeader = {},
		requestConfig = {}
	) {
		const headers = {
			...this.defaultHeadersOption,
			'Content-Type': contentType,
			...(withToken ? this.setAuthorization(requestHeader) : requestHeader),
		};
		return this.axios.get(url, {
			params,
			headers,
			...{ ...this.defaultRequestConfig, ...requestConfig },
		});
	}

	delete(
		url,
		params = {},
		withToken = true,
		contentType = 'application/json',
		requestHeader = {},
		requestConfig = {}
	) {
		const headers = {
			...this.defaultHeadersOption,
			'Content-Type': contentType,
			...(withToken ? this.setAuthorization(requestHeader) : requestHeader),
		};
		return this.axios.delete(url, {
			params,
			headers,
			...{ ...this.defaultRequestConfig, ...requestConfig },
		});
	}

	post(
		url,
		data = {},
		withToken = true,
		contentType = 'application/json',
		requestHeader = {},
		requestConfig = {}
	) {
		data = {
			...data,
		};
		const headers = {
			...this.defaultHeadersOption,
			'Content-Type': contentType,
			...(withToken ? this.setAuthorization(requestHeader) : requestHeader),
		};
		return this.axios.post(url, data, {
			headers,
			...{ ...this.defaultRequestConfig, ...requestConfig },
		});
	}

	postForm(
		url,
		data = {},
		withToken = true,
		contentType = 'application/x-www-form-urlencoded',
		requestHeader = {},
		requestConfig = {}
	) {
		const headers = {
			...this.defaultHeadersOption,
			'Content-Type': contentType,
			...(withToken ? this.setAuthorization(requestHeader) : requestHeader),
		};
		return this.axios.post(url, qs.stringify(data), {
			headers,
			...{ ...this.defaultRequestConfig, ...requestConfig },
		});
	}

	onRequestFulfilled(config) {
		if (config.showLoading) {
			loading = ElLoading.service({
				fullscreen: true,
				lock: true,
				text: 'Loading',
				background: 'rgba(0, 0, 0, 0.7)',
			});
		}
		return config;
	}

	onRequestRejected(error) {
		// 错误抛到业务代码
		error.message = '服务器异常，请联系管理员!';
		return Promise.resolve(error);
	}

	onResponseFulfilled = response => {
		const code = response?.data?.code;
		if (code !== 200) {
			response?.data?.msg && ElMessage.error({ message: response?.data?.msg });
		}
		loading.close();
		return response;
	};

	onResponseRejected = error => {
		// 错误抛到业务代码
		if (error?.response) {
			const status = error.response.status;
			error.message = ResponseStatusWords[status] || ResponseStatusWords[Default];
			ElMessage.error({ message: error });
			this.currentErrorStatus = status;
			if (status === 401) {
				// 401需要回到登录页
			}
		} else {
			if (error.message.includes('timeout')) {
				ElMessage.error({ message: '当前网络状态不佳，请稍后重试' });
			} else {
				ElMessage.error({ message: ResponseStatusWords[Default] });
			}
		}
		loading.close();
		return Promise.resolve(error);
	};
}

export default new HttpService();
