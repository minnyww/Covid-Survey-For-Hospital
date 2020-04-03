import React from 'react'
import { Typography, Button, Radio, InputNumber, Input } from 'antd';
import styled from 'styled-components';
const Box = styled.div`
    padding: 10px;
    border: 1px solid #dadada;
    margin-bottom: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.09);
`

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

const BaseButton = styled(Button)`
    width: 50%;
    margin-top : 18px;
`

export default function Profile({
    gender, setGender, age, setAge, setJob, job, position, setPosition, setOtherPosition, setDepartment, department,
    handleSaveProfile, setOtherJob }) {
    return (
        <>
            <Typography.Title level={2} style={{ color: '#1890ff' }}>ข้อมูลเบื้องต้น</Typography.Title>
            <Box>
                <Typography.Title level={4}>เพศ</Typography.Title>
                <Radio.Group onChange={(event) => setGender(event.target.value)} value={gender}>
                    <Radio value={'ชาย'}>ชาย</Radio>
                    <Radio value={'หญิง'}>หญิง</Radio>
                </Radio.Group>
            </Box>

            <Box>
                <Typography.Title level={4}>อายุ</Typography.Title>
                <InputNumber defaultValue={0} onChange={(event) => setAge(event)} value={age} />
            </Box>

            <Box>
                <Typography.Title level={4}>อาชีพ</Typography.Title>
                <Radio.Group onChange={(event) => setJob(event.target.value)} value={job}>
                    <Radio style={radioStyle} value={'ข้าราชการ'}>
                        ข้าราชการ
                </Radio>
                    <Radio style={radioStyle} value={'พนักงานกระทรวงสาธารณสุข'}>
                        พนักงานกระทรวงสาธารณสุข
                </Radio>
                    <Radio style={radioStyle} value={'ลูกจ้างประจำ'}>
                        ลูกจ้างประจำ
                </Radio>
                    <Radio style={radioStyle} value={'ลูกจ้างชั่วคราว'}>
                        ลูกจ้างชั่วคราว
                    </Radio>
                    <Radio style={radioStyle} value={'อื่นๆ'}>
                        อื่นๆ
                    </Radio>
                    {job === 'อื่นๆ' && <Input placeholder="อื่นๆ ระบุ" onChange={(event) => setOtherJob(event.target.value)} />}
                </Radio.Group>
            </Box>

            <Box>
                <Typography.Title level={4}>ตำแหน่ง</Typography.Title>
                <Radio.Group onChange={(event) => setPosition(event.target.value)} value={position}>
                    <Radio style={radioStyle} value={'แพทย์'}>
                        แพทย์
                    </Radio>
                    <Radio style={radioStyle} value={'พยาบาล'}>
                        พยาบาล
                    </Radio>
                    <Radio style={radioStyle} value={'เภสัชกร'}>
                        เภสัชกร
                    </Radio>
                    <Radio style={radioStyle} value={'อื่นๆ'}>
                        อื่นๆ
                    </Radio>
                    {position === 'อื่นๆ' && <Input placeholder="อื่นๆ ระบุ" onChange={(event) => setOtherPosition(event.target.value)} />}
                </Radio.Group>
            </Box>

            <Box>
                <Typography.Title level={4}>แผนก</Typography.Title>
                <Input placeholder="แผนก" onChange={(event) => setDepartment(event.target.value)} value={department} />
            </Box>

            {
                <BaseButton
                    disabled={(age && job && position && department && gender) ? false : true}
                    type="primary"
                    size="large"
                    onClick={() => handleSaveProfile()}>ต่อไป</BaseButton>}

        </>
    )
}