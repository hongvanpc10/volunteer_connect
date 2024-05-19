export class OrganizationError extends Error {
	constructor(message: string) {
		switch (true) {
			default:
				super('Đã có lỗi xãy ra. Vui lòng thử lại sau.')
		}
	}
}
