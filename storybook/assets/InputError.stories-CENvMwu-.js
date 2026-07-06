import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./iframe-BJjOLL4L.js";import{t as i}from"./prop-types-CAcijpg_.js";import{a,i as o,n as s,r as c}from"./free-solid-svg-icons-DnL8CIrE.js";var l=e((()=>{})),u,d,f,p,m=e((()=>{n(),u=t(i()),a(),c(),l(),d=r(),f={TEXT:`text`,PASSWORD:`password`},p=({isError:e,onChange:t,placeholder:n=``,testId:r=void 0,type:i=f.TEXT,value:a=``,...c})=>(0,d.jsxs)(`div`,{className:`form_group`,children:[(0,d.jsx)(`input`,{className:`input_error form_input${e?` error`:``}`,placeholder:n,onChange:t,type:i,value:a,...r?{"data-test":r,id:r,name:r}:{},...c}),e&&(0,d.jsx)(o,{icon:s,className:`error_icon`})]}),p.propTypes={isError:u.default.bool.isRequired,onChange:u.default.func.isRequired,placeholder:u.default.string,testId:u.default.string,type:u.default.oneOf([`text`,`password`]),value:u.default.string},p.__docgenInfo={description:``,methods:[],displayName:`InputError`,props:{placeholder:{defaultValue:{value:`""`,computed:!1},description:`The placeholder of the input`,type:{name:`string`},required:!1},testId:{defaultValue:{value:`undefined`,computed:!0},description:`The test id`,type:{name:`string`},required:!1},type:{defaultValue:{value:`"text"`,computed:!1},description:`What type of field is it`,type:{name:`enum`,value:[{value:`"text"`,computed:!1},{value:`"password"`,computed:!1}]},required:!1},value:{defaultValue:{value:`""`,computed:!1},description:`The value of the input`,type:{name:`string`},required:!1},isError:{description:`If this is an isError field yes or no`,type:{name:`bool`},required:!0},onChange:{description:`The on change handler`,type:{name:`func`},required:!0}}}})),h,g,_,v,y,b,x,S;e((()=>{h=t(n()),m(),g=r(),_={title:`SwagLabs/Form/Input`,component:p,argTypes:{value:{control:{disable:!0}}}},v=e=>{let[t,n]=(0,h.useState)(e.value??``);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{onChange:e=>n(e.target.value),value:t,...e}),(0,g.jsxs)(`p`,{children:[`Your typed `,(0,g.jsxs)(`strong`,{children:[`"`,t,`"`]}),`.`]})]})},y=v.bind({}),y.args={isError:!1,placeholder:`Placeholder`},b=v.bind({}),b.args={isError:!0,placeholder:`Placeholder`,value:`This is the value`},x=v.bind({}),x.args={isError:!1,type:f.PASSWORD,placeholder:`Type you password here`,value:`SecurePassword123!`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? "");
  return <>
      <InputError onChange={evt => setValue(evt.target.value)} value={value} {...args} />
      <p>
        Your typed <strong>"{value}"</strong>.
      </p>
    </>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? "");
  return <>
      <InputError onChange={evt => setValue(evt.target.value)} value={value} {...args} />
      <p>
        Your typed <strong>"{value}"</strong>.
      </p>
    </>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? "");
  return <>
      <InputError onChange={evt => setValue(evt.target.value)} value={value} {...args} />
      <p>
        Your typed <strong>"{value}"</strong>.
      </p>
    </>;
}`,...x.parameters?.docs?.source}}},S=[`Input`,`ErrorInput`,`Secure`]}))();export{b as ErrorInput,y as Input,x as Secure,S as __namedExportsOrder,_ as default};