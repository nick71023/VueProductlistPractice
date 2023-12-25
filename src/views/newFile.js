/* __placeholder__ */
export default (await import('vue')).defineComponent({
created() {
const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
const api = process.env.VUE_APP_API + '/api/user/check';
this.$http.post(api, this.user).then((res) => {
console.log(token, api);
console.log(this.user);
});
}
});
