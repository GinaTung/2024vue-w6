import{_ as c,e as m,c as u,a as e,h as _,i,v as l,b as p,w as f,r as h,o as w,d as b}from"./index-xuA4CH-k.js";var v={VITE_APP_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_API_NAME:"yuling2023",BASE_URL:"/2024vue-w6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:x}=v,g={data(){return{user:{email:"",password:""}}},methods:{login(){m.post(`${x}/admin/signin`,this.user).then(t=>{const{expired:s,token:r}=t.data;document.cookie=`hexToken=${r}; expires=${new Date(s)}`,this.$router.push("/admin")}).catch(t=>{console.log(t)})}}},P={class:"container my-5"},V={class:"row justify-content-center"},A=e("h1",{class:"h3 mb-3 font-weight-normal text-center"},"請先登入",-1),E={class:"col-8"},k={class:"form-floating mb-3"},y=e("label",{for:"username"},"Email address",-1),R={class:"form-floating"},I=e("label",{for:"password"},"Password",-1),L=e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",id:"login"}," 登入 ",-1),T=e("p",{class:"mt-5 mb-3 text-muted text-center"},"© 2024~∞ - 六角學院",-1);function D(t,s,r,U,n,a){const d=h("RouterLink");return w(),u("div",P,[e("div",V,[A,e("div",E,[e("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=_((...o)=>a.login&&a.login(...o),["prevent"]))},[e("div",k,[i(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>n.user.username=o),id:"username",placeholder:"name@example.com",required:"",autocomplete:"username"},null,512),[[l,n.user.username]]),y]),e("div",R,[i(e("input",{type:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=o=>n.user.password=o),id:"password",placeholder:"Password",required:"",autocomplete:"current-password"},null,512),[[l,n.user.password]]),I]),L,p(d,{class:"btn btn-lg btn-dark w-100 mt-3",to:"/"},{default:f(()=>[b("回前台")]),_:1})],32)])]),T])}const M=c(g,[["render",D]]);export{M as default};