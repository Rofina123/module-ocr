export var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
export class Alert {
}
export class UserGroupDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRolePageDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRoleDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9vY3ItdmFsaWRhdGlvbnMvc3JjL2xpYi9waWNzLW9jcnZhbGlkYXRpb24vY29tbW9uL2NvbW1vbi5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFOLElBQVksU0FLWDtBQUxELFdBQVksU0FBUztJQUNuQiwrQ0FBTyxDQUFBO0lBQ1AsMkNBQUssQ0FBQTtJQUNMLHlDQUFJLENBQUE7SUFDSiwrQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLFNBQVMsS0FBVCxTQUFTLFFBS3BCO0FBQ0QsTUFBTSxPQUFPLEtBQUs7Q0FHakI7QUFnQkQsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFBWSxJQUE0QjtRQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sZUFBZTtJQU8xQixZQUFZLElBQStCO1FBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxXQUFXO0lBVXRCLFlBQVksSUFBMkI7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLE9BQU87SUFVbEIsWUFBWSxJQUF1QjtRQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIER5bmFtaWNPYmplY3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQWxlcnRUeXBlIHtcclxuICBTdWNjZXNzLFxyXG4gIEVycm9yLFxyXG4gIEluZm8sXHJcbiAgV2FybmluZ1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBbGVydCB7XHJcbiAgdHlwZSE6IEFsZXJ0VHlwZTtcclxuICBtZXNzYWdlITogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5zaWdodHMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzZXJpZXM6IFNlcmllc1tdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWVzIHtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBtb250aDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1cyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyR3JvdXBEdG8ge1xyXG4gIGlkPzogbnVtYmVyO1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXJHcm91cER0bz4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclJvbGVQYWdlRHRvIHtcclxuICBpZD86IG51bWJlcjtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIHJvdXRlPzogc3RyaW5nO1xyXG4gIGljb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gIG9yZGVyPzogbnVtYmVyO1xyXG4gIGlzbWVudT86IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlclJvbGVQYWdlRHRvPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyUm9sZUR0byB7XHJcbiAgaWQ/OiBudW1iZXI7XHJcbiAgbmFtZT86IHN0cmluZztcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgcHJpb3JpdHk/OiBudW1iZXI7XHJcbiAgb3JkZXI/OiBudW1iZXI7XHJcbiAgZGVmYXVsdHBhZ2U/OiBVc2VyUm9sZVBhZ2VEdG87XHJcbiAgZGVmYXVsdHBhZ2VpZD86IG51bWJlcjtcclxuICBwYXJlbnRpZD86IG51bWJlciB8IG51bGw7XHJcbiAgcGFyZW50PzogVXNlclJvbGVEdG8gfCBudWxsO1xyXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXJSb2xlRHRvPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyRHRvIHtcclxuICBpZD86IG51bWJlcjtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcclxuICBwcmlvcml0eT86IG51bWJlcjtcclxuICBvcmRlcj86IG51bWJlcjtcclxuICBkZWZhdWx0cGFnZT86IFVzZXJSb2xlUGFnZUR0bztcclxuICBkZWZhdWx0cGFnZWlkPzogbnVtYmVyO1xyXG4gIHBhcmVudGlkPzogbnVtYmVyIHwgbnVsbDtcclxuICBwYXJlbnQ/OiBVc2VyUm9sZUR0byB8IG51bGw7XHJcbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlckR0bz4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==