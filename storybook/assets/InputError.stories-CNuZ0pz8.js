import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./iframe-CxR8qZjU.js";import{n as i,r as a,t as o}from"./InputError-DW5Z7sHY.js";var s,c,l,u,d,f,p,m;e((()=>{s=t(n()),a(),c=r(),l={title:`SwagLabs/Form/Input`,component:i,argTypes:{value:{control:{disable:!0}}}},u=e=>{let[t,n]=(0,s.useState)(e.value??``);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onChange:e=>n(e.target.value),value:t,...e}),(0,c.jsxs)(`p`,{children:[`Your typed `,(0,c.jsxs)(`strong`,{children:[`"`,t,`"`]}),`.`]})]})},d=u.bind({}),d.args={isError:!1,placeholder:`Placeholder`},f=u.bind({}),f.args={isError:!0,placeholder:`Placeholder`,value:`This is the value`},p=u.bind({}),p.args={isError:!1,type:o.PASSWORD,placeholder:`Type you password here`,value:`SecurePassword123!`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? "");
  return <>
      <InputError onChange={evt => setValue(evt.target.value)} value={value} {...args} />
      <p>
        Your typed <strong>"{value}"</strong>.
      </p>
    </>;
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? "");
  return <>
      <InputError onChange={evt => setValue(evt.target.value)} value={value} {...args} />
      <p>
        Your typed <strong>"{value}"</strong>.
      </p>
    </>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value ?? "");
  return <>
      <InputError onChange={evt => setValue(evt.target.value)} value={value} {...args} />
      <p>
        Your typed <strong>"{value}"</strong>.
      </p>
    </>;
}`,...p.parameters?.docs?.source}}},m=[`Input`,`ErrorInput`,`Secure`]}))();export{f as ErrorInput,d as Input,p as Secure,m as __namedExportsOrder,l as default};