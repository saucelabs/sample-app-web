import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./iframe-CxR8qZjU.js";import{n as i,t as a}from"./SubmitButton-BIjr8Ojj.js";var o,s,c,l,u,d;e((()=>{o=t(n()),i(),s=r(),c={title:`SwagLabs/Form/Submit Button`,component:a},l=e=>{let[t,n]=(0,o.useState)(0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{...e,onClick:()=>n(t+1)}),(0,s.jsxs)(`p`,{children:[`You clicked `,(0,s.jsx)(`strong`,{children:t}),` times.`]})]})},u=l.bind({}),u.args={value:`Submit button`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(0);
  return <>
      <SubmitButton {...args} onClick={() => setValue(value + 1)} />
      <p>
        You clicked <strong>{value}</strong> times.
      </p>
    </>;
}`,...u.parameters?.docs?.source}}},d=[`Submit`]}))();export{u as Submit,d as __namedExportsOrder,c as default};