import React from 'react'
import { Typography, Radio, Button } from 'antd';
import styled from 'styled-components';

const BaseButton = styled(Button)`
    width: 50%;
    margin-top : 18px;
`

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


export default function Survey({
    setScore1, setScore2, setScore3, setScore4, setScore5,
    score1, score2, score3, score4, score5, sumscore, isLoading }) {
    return (
        <>
            <Typography.Title level={4}>แบบสำรวจและคัดกรองความเครียดด้วยตนเอง (ST-5)</Typography.Title>

            <Box>
                <Typography.Title level={4} style={{ fontSize: '16px' }}>มีปัญหาการนอน นอนไม่หลับหรือนอนมากเกินไป</Typography.Title>
                <Radio.Group onChange={(event) => setScore1(event.target.value)}>
                    <Radio value={0} style={radioStyle}>
                        แทบไม่เป็น
                </Radio>
                    <Radio value={1} style={radioStyle}>
                        เป็นบางครั้ง
                    </Radio>
                    <Radio value={2} style={radioStyle}>
                        บ่อยครั้ง
                    </Radio>
                    <Radio value={3} style={radioStyle}>
                        เป็นประจำ
                </Radio>
                </Radio.Group>
            </Box>

            <Box>
                <Typography.Title level={4} style={{ fontSize: '16px' }}>มีสมาธิน้อยลง</Typography.Title>
                <Radio.Group onChange={(event) => setScore2(event.target.value)} >
                    <Radio value={0} style={radioStyle}>
                        แทบไม่เป็น
                </Radio>
                    <Radio value={1} style={radioStyle}>
                        เป็นบางครั้ง
                    </Radio>
                    <Radio value={2} style={radioStyle}>
                        บ่อยครั้ง
                    </Radio>
                    <Radio value={3} style={radioStyle}>
                        เป็นประจำ
                </Radio>
                </Radio.Group>
            </Box>

            <Box>
                <Typography.Title level={4} style={{ fontSize: '16px' }}>หงุดหงิด/กระวนกระวาย/ว้าวุ่นใจ</Typography.Title>
                <Radio.Group onChange={(event) => setScore3(event.target.value)} >
                    <Radio value={0} style={radioStyle}>
                        แทบไม่เป็น
                </Radio>
                    <Radio value={1} style={radioStyle}>
                        เป็นบางครั้ง
                    </Radio>
                    <Radio value={2} style={radioStyle}>
                        บ่อยครั้ง
                    </Radio>
                    <Radio value={3} style={radioStyle}>
                        เป็นประจำ
                </Radio>
                </Radio.Group>
            </Box>

            <Box>
                <Typography.Title level={4} style={{ fontSize: '16px' }}>รู้สึกเบื่อ เซ็ง</Typography.Title>
                <Radio.Group onChange={(event) => setScore4(event.target.value)}>
                    <Radio value={0} style={radioStyle}>
                        แทบไม่เป็น
                </Radio>
                    <Radio value={1} style={radioStyle}>
                        เป็นบางครั้ง
                    </Radio>
                    <Radio value={2} style={radioStyle}>
                        บ่อยครั้ง
                    </Radio>
                    <Radio value={3} style={radioStyle}>
                        เป็นประจำ
                </Radio>
                </Radio.Group>
            </Box>

            <Box>
                <Typography.Title level={4} style={{ fontSize: '16px' }}>ไม่อยากพบปะผู้คน</Typography.Title>
                <Radio.Group onChange={(event) => setScore5(event.target.value)} >
                    <Radio value={0} style={radioStyle}>
                        แทบไม่เป็น
                </Radio>
                    <Radio value={1} style={radioStyle}>
                        เป็นบางครั้ง
                    </Radio>
                    <Radio value={2} style={radioStyle}>
                        บ่อยครั้ง
                    </Radio>
                    <Radio value={3} style={radioStyle}>
                        เป็นประจำ
                </Radio>
                </Radio.Group>
            </Box>
            <BaseButton
                loading={isLoading}
                size="large"
                disabled={(score1 !== null && score2 !== null && score3 !== null && score4 !== null && score5 !== null) ? false : true}
                type="primary"
                onClick={() => sumscore()}>Submit</BaseButton>
        </>
    )
}