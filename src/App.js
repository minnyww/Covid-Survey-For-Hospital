import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typography, Button, Table } from 'antd';
import Profile from './Profile';
import Survey from './Survey'
import firebaseApp from './config/firebaseConfig';

const Content = styled.div`
/* max-width : 50%;  
    width: 90%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto; */

    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    max-width: 600px;
    margin: 0 auto;
    padding: 24px;
`
const BaseButton = styled(Button)`
    width: 50%;
    margin-top : 18px;
`
let userProfile = {}
function App() {
  const [page, setCurrentPage] = useState(1)
  const [gender, setGender] = useState('')
  const [job, setJob] = useState('')
  const [otherJob, setOtherJob] = useState('')
  const [age, setAge] = useState('')
  const [otherPosition, setOtherPosition] = useState('')
  const [position, setPosition] = useState('')
  const [department, setDepartment] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [score1, setScore1] = useState(null)
  const [score2, setScore2] = useState(null)
  const [score3, setScore3] = useState(null)
  const [score4, setScore4] = useState(null)
  const [score5, setScore5] = useState(null)
  async function sumscore() {
    setIsLoading(true)
    let user = {
      date: new Date().toLocaleString(),
      gernder: gender,
      age: age,
      job: job,
      otherJob: otherJob,
      position: position,
      otherPosition: otherPosition,
      department: department,
      score: score1 + score2 + score3 + score4 + score5
    }
    // console.log(user)
    await firebaseApp.firestore().collection('man-survey').doc().set(user)
    setIsLoading(false)
    setCurrentPage(5)
  }

  function handleSaveProfile() {
    userProfile = {
      date: new Date().toDateString(),
      gernder: gender,
      age: age,
      job: job,
      otherJob: otherJob,
      position: position,
      otherPosition: otherPosition,
      department: department
    }
    setCurrentPage(4)
  }

  const Intro = () => {
    return (
      <>
        <Typography.Title level={3} style={{ color: '#1890ff' }}>แบบสำรวจและคัดกรองความเครียดด้วยตนเอง (ST-5) สำหรับบุคลากร โรงพยาบาลพระนั่งเกล้าที่ปฎิบัติงานช่วงโรคไวรัสโคโรนา (Covid-19) ระบาด</Typography.Title>
        <Typography.Title level={3}>บทนำ</Typography.Title>
        <Typography.Title level={4} style={{ marginTop: '0em' }}>ความเครียดเกิดขึ้นได้กับทุกคน สาเหตุที่ทำให้เกิดความเครียดมีได้หลายอย่างเช่น รายได้ที่ไม่เพียงพอ หนี้สิน ภัยพิบัติต่างๆ ที่ทำให้เกิดความสูญเสีย ความเจ็บป่วยเป็นต้น ความเครียดมีทั้งประโยชน์ และโทษหากมากเกินไปจะทำให้เกิดผลเสียต่อร่างกายและจิตใจของท่านได้</Typography.Title>
        <BaseButton style={{ width: '100%' }} type="primary" size="large" onClick={() => setCurrentPage(2)}>ต่อไป</BaseButton>
      </>
    )
  }

  const Howto = () => {
    return (
      <>
        <Typography.Title level={3} style={{ color: '#1890ff' }}>คำชี้แจง</Typography.Title>
        <Typography.Title level={4}>
          คำถามต่อไปนี้จะถามถึงประสบการณ์ของท่านในช่วงระยะ
          2-4 สัปดาห์ที่ผ่านมา ให้ท่านสำรวจตัวท่านเองและประเมินเหตุการณ์ อาการหรือความคิดเห็นและความรู้สึกของท่านว่าอยู่ในระดับใด
        </Typography.Title>
        <BaseButton type="primary" size="large" onClick={() => setCurrentPage(3)}>ต่อไป</BaseButton>
      </>
    )
  }

  const Result = ({ score1, score2, score3, score4, score5 }) => {

    function checkScore(score) {
      switch (true) {
        case score <= 4:
          return 'เครียดน้อย'
        case score > 4 && score <= 7:
          return 'เครียดปานกลาง'
        case score > 7 && score <= 9:
          return 'เครียดมาก'
        case score > 9 && score <= 15:
          return 'เครียดมากที่สุด'
        default:
          break;
      }
    }
    let sumCcore = score1 + score2 + score3 + score4 + score5

    return (
      <>
        <Typography.Title level={4} style={{ textAlign: 'center' }}>ขอบคุณที่เข้าร่วมการประเมินฯ</Typography.Title>
        <Typography.Title level={4}>ผลการตอบแบบประเมินความเครียด (ST5)</Typography.Title>
        <Typography.Title level={4} style={{ marginLeft: '5%', marginTop: '0em' }}>คุณได้คะแนนรวม {score1 + score2 + score3 + score4 + score5} คะแนน</Typography.Title>
        <Typography.Title level={4} style={{ marginLeft: '5%', marginTop: '0em' }}>การแปลผลการประเมิน คุณมีความ{checkScore(sumCcore)}</Typography.Title>
        <Typography.Title level={4} style={{ textDecoration: 'underline', fontSize: '16px' }}>เกณฑ์ที่กำหนด</Typography.Title>
        <Typography.Paragraph style={{ marginLeft: '5%', fontSize: '14px', fontWeight: '600' }}>คะแนน 0-4 เครียดน้อย</Typography.Paragraph>
        <Typography.Paragraph style={{ marginLeft: '5%', fontSize: '14px', fontWeight: '600' }}>คะแนน 5-7 เครียดปานกลาง</Typography.Paragraph>
        <Typography.Paragraph style={{ marginLeft: '5%', fontSize: '14px', fontWeight: '600' }}>คะแนน 8-9 เครียดมาก</Typography.Paragraph>
        <Typography.Paragraph style={{ marginLeft: '5%', fontSize: '14px', fontWeight: '600', marginBottom: '20%' }}>คะแนน 10-15 เครียดมากที่สุด</Typography.Paragraph>
        <span >แหล่งอ้างอิง : กรมสุขภาพจิต กระทรวงสาธารณสุข (Department of MentalHealth, Ministry of Public Health )</span>
      </>
    )
  }
  var urlParams = new URLSearchParams(window.location.search);
  let admin = urlParams.get('mentaladmin') === "mentaladmin"

  const AdminData = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const columns = [
      {
        title: 'วันที่',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'อายุ',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'เพศ',
        key: 'gernder',
        dataIndex: 'gernder',
      },
      {
        title: 'อาชีพ',
        key: 'job',
        dataIndex: 'job',
      },
      {
        title: 'อาชีพอื่นๆ',
        key: 'otherJob',
        dataIndex: 'otherJob',
      },
      {
        title: 'แผนก',
        dataIndex: 'department',
        key: 'department',
      },
      {
        title: 'ตำแหน่ง',
        dataIndex: 'position',
        key: 'position',
      },
      {
        title: 'ตำแหน่งอื่นๆ',
        dataIndex: 'otherPosition',
        key: 'otherPosition',
      },
      {
        title: 'คะแนนรวม',
        dataIndex: 'score',
        key: 'score',
      },

    ];

    useEffect(() => {
      getDate()
    }, [])

    async function getDate() {
      setIsLoading(true)
      const alreadyDoc = await firebaseApp.firestore().collection('man-survey').get()
      const data = await alreadyDoc.docs.map(doc => {
        const data = doc.data();
        const key = doc.id;
        return { key, ...data };
      })
      setData(data)
      setIsLoading(false)
    }
    return (
      <>
        <Table columns={columns} dataSource={data} size="small" loading={isLoading} scroll={{ x: 600 }} />
        <span style={{ position: 'fixed', bottom: '10px' }}>CR : Apisit Amnuayworrabut </span>
      </>
    )
  }

  return (
    <Content>
      {admin && <AdminData />}
      {page === 1 && !admin && <Intro />}
      {page === 2 && !admin && <Howto />}
      {page === 3 && !admin && <Profile
        setGender={setGender}
        gender={gender}
        setAge={setAge}
        age={age}
        setJob={setJob}
        job={job}
        otherJob={otherJob}
        setOtherJob={setOtherJob}
        setPosition={setPosition}
        position={position}
        setOtherPosition={setOtherPosition}
        setDepartment={setDepartment}
        department={department}
        handleSaveProfile={handleSaveProfile}
      />}
      {page === 4 && !admin && <Survey
        setScore1={setScore1}
        setScore2={setScore2}
        setScore3={setScore3}
        setScore4={setScore4}
        setScore5={setScore5}
        score1={score1}
        score2={score2}
        score3={score3}
        score4={score4}
        score5={score5}
        sumscore={sumscore}
        isLoading={isLoading}
      />}
      {page === 5 && !admin &&
        <Result score1={score1}
          score2={score2}
          score3={score3}
          score4={score4}
          score5={score5} />}
      {page !== 1 && page !== 5 && !admin &&
        <BaseButton
          size="large"
          onClick={() => setCurrentPage(page - 1)}>กลับ</BaseButton>}
    </Content>
  );
}

export default App;
