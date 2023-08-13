// src/mock/login/index.bundled_a7efsw8jpmb.mjs
var login_default = [
  {
    url: "/api/login",
    method: "post",
    response: ({ body }) => {
      if (body.username !== "admin" || body.password !== "123456") {
        return {
          code: 500,
          message: "\u7528\u6237\u540D\u6216\u5BC6\u7801\u8F93\u5165\u9519\u8BEF"
        };
      }
      const params = {
        permissions: ["system:btn:add", "system:btn:edit", "system:btn:remove"],
        token: "hfejahfjeafe6612gjuiouio37812gjhg3213"
      };
      return {
        code: 200,
        message: "ok",
        data: params
      };
    }
  }
];
export {
  login_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svbG9naW4vc3JjL21vY2svbG9naW4vaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRDpcXFxcbXlQcmFjdGljZVxcXFxyZWFjdC1tYW5hZ2VcXFxcc3JjXFxcXG1vY2tcXFxcbG9naW5cXFxcaW5kZXguanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcbXlQcmFjdGljZVxcXFxyZWFjdC1tYW5hZ2VcXFxcc3JjXFxcXG1vY2tcXFxcbG9naW5cIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0Q6L215UHJhY3RpY2UvcmVhY3QtbWFuYWdlL3NyYy9tb2NrL2xvZ2luL2luZGV4LmpzXCI7ZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIHVybDogJy9hcGkvbG9naW4nLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHJlc3BvbnNlOiAoeyBib2R5IH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGJvZHkudXNlcm5hbWUgIT09ICdhZG1pbicgfHwgYm9keS5wYXNzd29yZCAhPT0gJzEyMzQ1NicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdcdTc1MjhcdTYyMzdcdTU0MERcdTYyMTZcdTVCQzZcdTc4MDFcdThGOTNcdTUxNjVcdTk1MTlcdThCRUYnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IFsnc3lzdGVtOmJ0bjphZGQnLCAnc3lzdGVtOmJ0bjplZGl0JywgJ3N5c3RlbTpidG46cmVtb3ZlJ10sXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogJ2hmZWphaGZqZWFmZTY2MTJnanVpb3VpbzM3ODEyZ2poZzMyMTMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvZGU6IDIwMCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdvaycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwYXJhbXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlRLElBQU8sZ0JBQVE7RUFDcFI7SUFDSSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUNwQixVQUFJLEtBQUssYUFBYSxXQUFXLEtBQUssYUFBYSxVQUFVO0FBQ3pELGVBQU87VUFDSCxNQUFNO1VBQ04sU0FBUztRQUNiO01BQ0o7QUFDQSxZQUFNLFNBQVM7UUFDWCxhQUFhLENBQUMsa0JBQWtCLG1CQUFtQixtQkFBbUI7UUFDdEUsT0FBTztNQUNYO0FBQ0EsYUFBTztRQUNILE1BQU07UUFDTixTQUFTO1FBQ1QsTUFBTTtNQUNWO0lBQ0o7RUFDSjtBQUNKOyIsCiAgIm5hbWVzIjogW10KfQo=
