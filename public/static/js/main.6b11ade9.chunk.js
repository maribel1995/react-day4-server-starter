(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(66)},37:function(e,t,n){},38:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(28),c=n.n(l),o=(n(37),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),m=(n(38),n(14)),p=n(8),d=n.n(p),g=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.login=function(e,n){return t.service.post("/login",{username:e,password:n}).then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})},this.service=d.a.create({baseURL:"".concat("https://project-managment-react.herokuapp.com","/api"),withCredentials:!0})},f=n(13),v=n(6),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.signup(t,a).then(function(e){n.setState({username:"",password:""}),n.props.getUser(e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.state={username:"",password:""},n.service=new g,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("textarea",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(v.b,{to:"/login"}," Login")))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.username,a=n.state.password;n.service.login(t,a).then(function(e){n.setState({username:"",password:""}),n.props.getUser(e)}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.state={username:"",password:""},n.service=new g,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("textarea",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"Don't have account?",r.a.createElement(v.b,{to:"/signup"}," Signup")))}}]),t}(a.Component),j=d.a.create({baseURL:"".concat("https://project-managment-react.herokuapp.com","/api"),withCredentials:!0}),O=function(e){throw e},S={service:j,handleUpload:function(e){return j.post("/upload",e).then(function(e){return e.data}).catch(O)},saveNewProject:function(e){return j.post("/projects",e).then(function(e){return e.data}).catch(O)}},w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFileUpload=function(e){console.log("The file to be uploaded is: ",e.target.files[0]);var t=new FormData;t.append("imageUrl",e.target.files[0]),S.handleUpload(t).then(function(e){n.setState({imageUrl:e.secure_url})}).catch(function(e){console.log("Error while uploading the file: ",e)})},n.handleFormSubmit=function(e){e.preventDefault(),S.saveNewProject(n.state).then(function(e){console.log("added: ",e)}).catch(function(e){console.log("Error while adding the thing: ",e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.state={title:"",description:"",imageUrl:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"file",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).getAllProjects=function(){d.a.get("".concat("https://project-managment-react.herokuapp.com","/api/projects")).then(function(t){console.log(t),e.setState({listOfProjects:t.data})})},e.state={listOfProjects:[]},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAllProjects()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"60%",float:"left"}},this.state.listOfProjects.map(function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(v.b,{to:"/projects/".concat(e._id)},r.a.createElement("h3",null,e.title)),r.a.createElement("ul",null,e.tasks.map(function(e,t){return r.a.createElement("li",{key:t},e.title)})))})),r.a.createElement("div",{style:{width:"40%",float:"right"}},r.a.createElement(w,{getData:function(){return e.getAllProjects()}})))}}]),t}(a.Component),C=n(31),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).logoutUser=function(){n.service.logout().then(function(){n.setState({loggedInUser:null}),n.props.getUser(null)})},n.state={loggedInUser:null},n.service=new g,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(C.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,"Welcome, ",this.state.loggedInUser.username),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/projects",style:{textDecoration:"none"}},"Projects")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/"},r.a.createElement("button",{onClick:function(){return e.logoutUser()}},"Logout"))))):r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.b,{to:"/",style:{textDecoration:"none"}},"Login")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/signup",style:{textDecoration:"none"}},"Signup"))))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){var t=n.state.title,a=n.state.description;e.preventDefault(),d.a.put("".concat("https://project-managment-react.herokuapp.com","/api/projects/").concat(n.props.theProject._id),{title:t,description:a}).then(function(){n.props.getTheProject(),n.props.history.push("/projects")}).catch(function(e){return console.log(e)})},n.handleChangeTitle=function(e){n.setState({title:e.target.value})},n.handleChangeDesc=function(e){n.setState({description:e.target.value})},n.state={title:n.props.theProject.title,description:n.props.theProject.description},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"Edit form"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:function(t){return e.handleChangeTitle(t)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:this.state.description,onChange:function(t){return e.handleChangeDesc(t)}}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.Component),P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.title,a=n.state.description,r=n.props.theProject._id;d.a.post("".concat("https://project-managment-react.herokuapp.com","/api/tasks"),{title:t,description:a,projectID:r}).then(function(){n.props.getTheProject(),n.setState({title:"",description:""})}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(f.a)({},a,r))},n.toggleForm=function(){n.state.isShowing?n.setState({isShowing:!1}):n.setState({isShowing:!0})},n.showAddTaskForm=function(){if(n.state.isShowing)return r.a.createElement("div",null,r.a.createElement("h3",null,"Add Task"),r.a.createElement("form",{onSubmit:n.handleFormSubmit},r.a.createElement("label",null,"Title:"),r.a.createElement("input",{type:"text",name:"title",value:n.state.title,onChange:function(e){return n.handleChange(e)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"description",value:n.state.description,onChange:function(e){return n.handleChange(e)}}),r.a.createElement("input",{type:"submit",value:"Submit"})))},n.state={title:"",description:"",isShowing:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("button",{onClick:function(){return e.toggleForm()}}," Add task "),this.showAddTaskForm())}}]),t}(a.Component),F=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getSingleProject=function(){var e=n.props.match.params;d.a.get("".concat("https://project-managment-react.herokuapp.com","/api/projects/").concat(e.id)).then(function(e){var t=e.data;n.setState(t)}).catch(function(e){console.log(e)})},n.renderEditForm=function(){if(n.state.title)return r.a.createElement(U,Object.assign({theProject:n.state,getTheProject:n.getSingleProject},n.props));n.getSingleProject()},n.ownershipCheck=function(e){if(n.props.loggedInUser&&e.owner===n.props.loggedInUser._id)return r.a.createElement("div",null,r.a.createElement("div",null,n.renderEditForm()," "),r.a.createElement("button",{onClick:function(){return n.deleteProject(n.state._id)}},"Delete project"))},n.deleteProject=function(){var e=n.props.match.params;d.a.delete("http://localhost:5000/api/projects/".concat(e.id)).then(function(){n.props.history.push("/projects")}).catch(function(e){console.log(e)})},n.renderAddTaskForm=function(){if(n.state.title)return r.a.createElement(P,{theProject:n.state,getTheProject:n.getSingleProject});n.getSingleProject()},n.state={title:"",description:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getSingleProject()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.title),r.a.createElement("p",null,this.state.description),r.a.createElement("div",null,this.ownershipCheck(this.state)),this.state.tasks&&this.state.tasks.length>0&&r.a.createElement("h3",null,"Tasks "),this.state.tasks&&this.state.tasks.map(function(t,n){return r.a.createElement("div",{key:n},r.a.createElement(v.b,{to:"/projects/".concat(e.state._id,"/tasks/").concat(t._id)},t.title))}),r.a.createElement("div",null,this.renderEditForm()," "),r.a.createElement("button",{onClick:function(){return e.deleteProject()}},"Delete project")," ",r.a.createElement("br",null),r.a.createElement("div",null,this.renderAddTaskForm()," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(v.b,{to:"/projects"},"Back to projects"))}}]),t}(a.Component),D=(a.Component,function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getTheUser=function(e){n.setState({loggedInUser:e})},n.state={loggedInUser:null},n.service=new g,n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement("div",{className:"App"},r.a.createElement(y,{userInSession:this.state.loggedInUser,getUser:this.getTheUser}),r.a.createElement(m.c,null,this.state.loggedInUser?r.a.createElement(a.Fragment,null,r.a.createElement(m.a,{exact:!0,path:"/projects",component:k}),r.a.createElement(m.a,{exact:!0,path:"/projects/:id",component:F})):r.a.createElement(a.Fragment,null,r.a.createElement(m.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(E,{getUser:e.getTheUser})}}),r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(b,{getUser:e.getTheUser})}}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v.a,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.6b11ade9.chunk.js.map