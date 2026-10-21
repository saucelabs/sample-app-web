import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{et as n,n as r}from"./iframe-bAu9AA8u.js";import{t as i}from"./prop-types-yvTfdAyx.js";var a,o,s;function c(){return(c=t((()=>{n(),a=e(i()),o=r(),s=({activeOption:e,ariaLabel:t=`Select an option`,onChange:n,options:r,testId:i=void 0})=>(0,o.jsxs)(`span`,{className:`select_container`,children:[(0,o.jsx)(`span`,{className:`active_option`,"data-test":`active-option`,children:r[r.findIndex(t=>t.key===e)].value}),(0,o.jsx)(`select`,{onChange:n,className:`product_sort_container`,value:e,"aria-label":t,...i?{"data-test":i}:{},children:r.map(({key:e,value:t})=>(0,o.jsx)(`option`,{value:e,children:t},e))})]}),s.propTypes={activeOption:a.default.string.isRequired,ariaLabel:a.default.string,onChange:a.default.func.isRequired,options:a.default.arrayOf(a.default.shape({key:a.default.string.isRequired,value:a.default.string.isRequired})).isRequired,testId:a.default.string},s.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{ariaLabel:{defaultValue:{value:`"Select an option"`,computed:!1},description:`The accessible name for the select element`,type:{name:`string`},required:!1},testId:{defaultValue:{value:`undefined`,computed:!0},description:`The test id`,type:{name:`string`},required:!1},activeOption:{description:`The active option key`,type:{name:`string`},required:!0},onChange:{description:`The on change handler`,type:{name:`func`},required:!0},options:{description:`The options`,type:{name:`arrayOf`,value:{name:`shape`,value:{key:{name:`string`,required:!0},value:{name:`string`,required:!0}}}},required:!0}}}})))()}var l,u,d,f,p,m;function h(){return(h=t((()=>{l=e(n()),c(),u=r(),d={title:`SwagLabs/Form/Select`,component:s,parameters:{backgrounds:{default:`grey`,values:[{name:`grey`,value:`#474c55`}]}}},f=()=>{let[e,t]=(0,l.useState)(`az`),n=[{key:`az`,value:`Name (A to Z)`},{key:`za`,value:`Name (Z to A)`},{key:`lohi`,value:`Price (low to high)`},{key:`hilo`,value:`Price (high to low)`}];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{activeOption:e,options:n,onChange:e=>{t(e.target.value)},testId:`product_sort_container`}),(0,u.jsxs)(`p`,{style:{color:`#ffffff`},children:[`You selected`,` `,(0,u.jsx)(`strong`,{children:n[n.findIndex(t=>t.key===e)].value}),`.`]})]})},p=f.bind({}),p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [activeOption, setActiveOption] = useState("az");
  const options = [{
    key: "az",
    value: "Name (A to Z)"
  }, {
    key: "za",
    value: "Name (Z to A)"
  }, {
    key: "lohi",
    value: "Price (low to high)"
  }, {
    key: "hilo",
    value: "Price (high to low)"
  }];
  const sortByOption = event => {
    setActiveOption(event.target.value);
  };
  return <>
      <Select activeOption={activeOption} options={options} onChange={sortByOption} testId="product_sort_container" />
      <p style={{
      color: "#ffffff"
    }}>
        You selected{" "}
        <strong>
          {options[options.findIndex(option => option.key === activeOption)].value}
        </strong>
        .
      </p>
    </>;
}`,...p.parameters?.docs?.source}}},m=[`DefaultSelect`]})))()}h();export{p as DefaultSelect,m as __namedExportsOrder,d as default};