// src/mock/system/index.bundled_chew3m00tx5.mjs
var userList = (() => {
  const result = [];
  for (let i = 0; i < 13; i++) {
    result.push({
      key: i,
      name: "@cname()",
      user: '@string("lower", 6)',
      status: '@pick(["stop","running"])',
      email: "@email",
      time: "@datetime()"
    });
  }
  return result;
})();
var notifyList = (() => {
  const result = [];
  for (let i = 0; i < 203; i++) {
    result.push({
      key: i,
      name: "@ctitle()",
      desc: "@cparagraph()",
      status: '@pick(["read","unread"])',
      user: "@last",
      time: "@datetime()"
    });
  }
  return result;
})();
var btnAuthlist = (key) => {
  const result = [];
  for (let i = 0; i < 4; i++) {
    result.push({
      name: '@pick(["\u65B0\u589E\u5217\u8868","\u5BFC\u5165\u6587\u4EF6"])',
      key: key + ":btn:@last",
      index: i
    });
  }
  return result;
};
var system_default = [
  {
    url: "/api/system/users",
    method: "post",
    timeout: 500,
    response: () => ({
      code: 200,
      message: "ok",
      data: userList
    })
  },
  {
    url: "/api/system/notifys",
    method: "post",
    timeout: 500,
    response: () => ({
      code: 200,
      message: "ok",
      data: notifyList
    })
  },
  {
    url: "/api/menu/btnAuthList",
    method: "post",
    timeout: 500,
    response: ({ body }) => ({
      code: 200,
      message: "ok",
      data: btnAuthlist(body.path || "system")
    })
  }
];
export {
  system_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svc3lzdGVtL3NyYy9tb2NrL3N5c3RlbS9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJEOlxcXFxteVByYWN0aWNlXFxcXHJlYWN0LW1hbmFnZVxcXFxzcmNcXFxcbW9ja1xcXFxzeXN0ZW1cXFxcaW5kZXguanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRDpcXFxcbXlQcmFjdGljZVxcXFxyZWFjdC1tYW5hZ2VcXFxcc3JjXFxcXG1vY2tcXFxcc3lzdGVtXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9EOi9teVByYWN0aWNlL3JlYWN0LW1hbmFnZS9zcmMvbW9jay9zeXN0ZW0vaW5kZXguanNcIjtjb25zdCB1c2VyTGlzdCA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgICBrZXk6IGksXHJcbiAgICAgICAgICAgIG5hbWU6ICdAY25hbWUoKScsXHJcbiAgICAgICAgICAgIHVzZXI6ICdAc3RyaW5nKFwibG93ZXJcIiwgNiknLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdAcGljayhbXCJzdG9wXCIsXCJydW5uaW5nXCJdKScsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnQGVtYWlsJyxcclxuICAgICAgICAgICAgdGltZTogJ0BkYXRldGltZSgpJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0XHJcbn0pKClcclxuXHJcbmNvbnN0IG5vdGlmeUxpc3QgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjAzOyBpKyspIHtcclxuICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgIGtleTogaSxcclxuICAgICAgICAgICAgbmFtZTogJ0BjdGl0bGUoKScsXHJcbiAgICAgICAgICAgIGRlc2M6ICdAY3BhcmFncmFwaCgpJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnQHBpY2soW1wicmVhZFwiLFwidW5yZWFkXCJdKScsXHJcbiAgICAgICAgICAgIHVzZXI6ICdAbGFzdCcsXHJcbiAgICAgICAgICAgIHRpbWU6ICdAZGF0ZXRpbWUoKSdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59KSgpXHJcblxyXG5jb25zdCBidG5BdXRobGlzdCA9IChrZXkpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdD0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiAnQHBpY2soW1wiXHU2NUIwXHU1ODlFXHU1MjE3XHU4ODY4XCIsXCJcdTVCRkNcdTUxNjVcdTY1ODdcdTRFRjZcIl0pJyxcclxuICAgICAgICAgICAga2V5OiBrZXkgKyAnOmJ0bjonICsgJ0BsYXN0JyxcclxuICAgICAgICAgICAgaW5kZXg6IGlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgdXJsOiAnL2FwaS9zeXN0ZW0vdXNlcnMnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICByZXNwb25zZTogKCkgPT4gKHtcclxuICAgICAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnb2snLFxyXG4gICAgICAgICAgICBkYXRhOiB1c2VyTGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVybDogJy9hcGkvc3lzdGVtL25vdGlmeXMnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICByZXNwb25zZTogKCkgPT4gKHtcclxuICAgICAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnb2snLFxyXG4gICAgICAgICAgICBkYXRhOiBub3RpZnlMaXN0XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdXJsOiAnL2FwaS9tZW51L2J0bkF1dGhMaXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgcmVzcG9uc2U6ICh7IGJvZHkgfSkgPT4gKHtcclxuICAgICAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnb2snLFxyXG4gICAgICAgICAgICBkYXRhOiBidG5BdXRobGlzdChib2R5LnBhdGggfHwgJ3N5c3RlbScpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRRLElBQU0sWUFBWSxNQUFNO0FBQ2hTLFFBQU0sU0FBUyxDQUFDO0FBQ2hCLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQ3pCLFdBQU8sS0FBSztNQUNSLEtBQUs7TUFDTCxNQUFNO01BQ04sTUFBTTtNQUNOLFFBQVE7TUFDUixPQUFPO01BQ1AsTUFBTTtJQUNWLENBQUM7RUFDTDtBQUNBLFNBQU87QUFDWCxHQUFHO0FBRUgsSUFBTSxjQUFjLE1BQU07QUFDdEIsUUFBTSxTQUFTLENBQUM7QUFDaEIsV0FBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDMUIsV0FBTyxLQUFLO01BQ1IsS0FBSztNQUNMLE1BQU07TUFDTixNQUFNO01BQ04sUUFBUTtNQUNSLE1BQU07TUFDTixNQUFNO0lBQ1YsQ0FBQztFQUNMO0FBQ0EsU0FBTztBQUNYLEdBQUc7QUFFSCxJQUFNLGNBQWMsQ0FBQyxRQUFRO0FBQ3pCLFFBQU0sU0FBUSxDQUFDO0FBQ2YsV0FBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDeEIsV0FBTyxLQUFLO01BQ1IsTUFBTTtNQUNOLEtBQUssTUFBTTtNQUNYLE9BQU87SUFDWCxDQUFDO0VBQ0w7QUFDQSxTQUFPO0FBQ1g7QUFFQSxJQUFPLGlCQUFRO0VBQ1g7SUFDSSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVLE9BQU87TUFDYixNQUFNO01BQ04sU0FBUztNQUNULE1BQU07SUFDVjtFQUNKO0VBQ0E7SUFDSSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVLE9BQU87TUFDYixNQUFNO01BQ04sU0FBUztNQUNULE1BQU07SUFDVjtFQUNKO0VBQ0E7SUFDSSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVLENBQUMsRUFBRSxLQUFLLE9BQU87TUFDckIsTUFBTTtNQUNOLFNBQVM7TUFDVCxNQUFNLFlBQVksS0FBSyxRQUFRLFFBQVE7SUFDM0M7RUFDSjtBQUNKOyIsCiAgIm5hbWVzIjogW10KfQo=