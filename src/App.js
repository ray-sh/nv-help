import React, { useState } from "react";
import { Button, Steps, message } from "antd";
import { DatePicker } from "antd";
import TextInput from "./commonInput";
const { Step } = Steps;

function App() {
  const [current, setCurrent] = useState(0);
  const [sample, setSample] = useState({ s1_org: "", s1_name: "" });

  function next() {
    setCurrent(current + 1);
  }

  function prev() {
    setCurrent(current - 1);
  }
  function textInputChange(event) {
    const _sample = { ...sample, [event.target.id]: event.target.value };
    setSample(_sample);
    console.log("new state", sample);
  }
  function s1DateChange(date, dateString) {
    //debugger;
    console.log(date);
    console.log(dateString);

    const _sample = { ...sample, s1_date: date };
    setSample(_sample);
  }
  const steps = [
    {
      title: "调查单位录入",
      content: (
        <>
          <TextInput
            id="s1_org"
            placeholder="调查单位"
            handleChange={textInputChange}
            value={sample["s1_org"]}
          />
          <TextInput
            id="s1_name"
            placeholder="调查者签名"
            handleChange={textInputChange}
            value={sample["s1_name"]}
          />
          <TextInput
            id="s1_phone"
            placeholder="联系方式"
            handleChange={textInputChange}
            value={sample["s1_phone"]}
          />
          <label>
            调查时间
            <DatePicker value={sample["s1_date"]} onChange={s1DateChange} />
          </label>
        </>
        // <div>
        //   <Input placeholder="调查单位" />
        //   <Input placeholder="调查者签名" />
        //   <Input placeholder="联系方式" />
        //   <DatePicker onChange={changeDanwei} />
        // </div>
      )
    },
    {
      title: "病例基本信息",
      content: "Second-content"
    },
    {
      title: "病例密切接触者情况",
      content: "Last-content"
    },
    {
      title: "发病与就诊",
      content: "Last-content"
    },
    {
      title: "危险因素与暴露史",
      content: "Last-content"
    },
    {
      title: "实验室检测",
      content: "Last-content"
    }
  ];

  return (
    <div>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success("完成录入!")}>
            完成
          </Button>
        )}
        {current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
            上一步
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
