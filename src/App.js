import React, { useState } from "react";
import { Button, Steps, message } from "antd";
import { DatePicker } from "antd";
import TextInput from "./commonInput";
import CommonRadio from "./commmonRadio";
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

  function dateChange(id) {
    const dchange = (date, dateString) => {
      const _sample = { ...sample, [id]: date };
      setSample(_sample);
    };
    return dchange;
  }
  function radioChange(id) {
    const change = event => {
      const _sample = { ...sample, [id]: event.target.value };
      setSample(_sample);
    };
    return change;
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
            <DatePicker
              value={sample["s1_date"]}
              onChange={dateChange("s1_date")}
            />
          </label>
        </>
      )
    },
    {
      title: "病例基本信息",
      content: (
        <>
          <TextInput
            id="s2_name"
            placeholder="姓名"
            handleChange={textInputChange}
            value={sample["s2_name"]}
          />
          <TextInput
            id="s2_id"
            placeholder="身份证号"
            handleChange={textInputChange}
            value={sample["s2_id"]}
          />
          <CommonRadio
            id="s2_sex"
            placeholder="性别"
            handleChange={radioChange("s2_sex")}
            value={sample["s2_sex"]}
            radios={["男", "女"]}
          />
          <br />
          <label>
            出生日期:
            <DatePicker
              value={sample["s2_birth"]}
              onChange={dateChange("s2_birth")}
            />
          </label>
          <br />
          <TextInput
            id="s2_addr"
            placeholder="现住址"
            handleChange={textInputChange}
            value={sample["s2_addr"]}
          />

          <label>
            发病日期:
            <DatePicker
              value={sample["s2_sickday"]}
              onChange={dateChange("s2_sickday")}
            />
          </label>

          <label>
            确诊日期:
            <DatePicker
              value={sample["s2_confirmday"]}
              onChange={dateChange("s2_confirmday")}
            />
          </label>
          <br />
          <CommonRadio
            id="s2_sicktype"
            placeholder="诊断类型"
            handleChange={radioChange("s2_sicktype")}
            value={sample["s2_sicktype"]}
            radios={[
              "疑似病例",
              "临床诊断病例（仅限湖北省)",
              "确诊病例",
              "阳性监测（无症状感染者)"
            ]}
          />
          <br />
          <CommonRadio
            id="s2_serious"
            placeholder="临床严重程度"
            handleChange={radioChange("s2_serious")}
            value={sample["s2_serious"]}
            radios={["无症状感染者", "轻型", "普通型", "重型", "危重型"]}
          />
        </>
      )
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
