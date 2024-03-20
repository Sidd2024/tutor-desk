import React, { useState } from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'react-text-gradients'
import { FaBars, FaUserCircle, FaFileAlt, FaFileInvoice} from 'react-icons/fa';
import { FaFileCirclePlus } from "react-icons/fa6";
import {IoMdSend,IoIosAddCircle, IoMdNotificationsOutline} from 'react-icons/io';
import {MdInfo, MdChecklist} from 'react-icons/md';


const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #000;
  color: #fff;
`;

const Sidebar = styled.div`                                                                                                                                                                                                                                                                                     
  width: ${(props) => (props.isOpen ? '200px' : '40px')};
  background-color: rgba(255, 255, 255, 0.1);
  transition: width 0.3s ease;
  padding: 1rem;
  justify-content: center;
  border-radius: 0 2rem 2rem 0;
`;

const SidebarToggle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 1;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRightContainer = styled.div`
  position: absolute;
  top: .01rem;
  right: .1rem;
  padding: .8rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 0 1.5rem;
`;

const ProfileIcon = styled.div`
  cursor: pointer;
  margin-left: 1rem;
`;

const NotificationIcon = styled.div`
  cursor: pointer;
  margin-left: 1rem;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Greeting = styled.h1`
  font-size: 2rem;
  margin-bottom: 4rem;
`;

const ActionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ActionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 1.7rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ActionIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ActionText = styled.span`
  font-size: 1rem;
`;

const InputContainer = styled.div`
position: relative;
display: flex;
align-items: center;
padding: 0.5rem;
margin-top: 6rem;
border-radius: 0.5rem;
width: 80%;
`;

const Input = styled.input`
flex-grow: 1;
background-color: transparent;
border: none;
color: #fff;
height: 2.5rem;
font-size: 1rem;
padding: 0.5rem;
margin-left: 0.5rem;
background-color: rgba(255, 255, 255, 0.1);
border-radius: 2rem;

  &:focus {
    outline: none;
  }
`;

const LeftIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const RightIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  font-size: 1.5rem;
  cursor: pointer;
`;

const FigmaDesign = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarToggle onClick={toggleSidebar}>
          <FaBars fontSize={'18px'}/>
        </SidebarToggle>
        <SidebarToggle onClick={toggleSidebar}>
          <IoIosAddCircle fontSize={'35px'} fill='rgba(255, 255, 255, 0.1)' />
        </SidebarToggle>
        {/* Add Sidebar content here */}
      </Sidebar>
      <Main>
        <Header>
          <HeaderRightContainer>
            <HeaderRight>
              <NotificationIcon>
                <IoMdNotificationsOutline fontSize={'22px'}/>
              </NotificationIcon>
              <ProfileIcon>
                <FaUserCircle fontSize={'25px'}/>
              </ProfileIcon>
            </HeaderRight>
          </HeaderRightContainer>
        </Header>
        <Greeting style={{color: 'rgba(255, 255, 255, 0.2)'}}>
        <LinearGradient gradient={['to right', '#FFDD95 ,#D04848']} style={{justifyContent: 'left'}}>
          Hello, Username
        </LinearGradient><br></br>How can I help you today?</Greeting>
        <ActionContainer>
          <ActionItem>
            <ActionIcon>
              <FaFileCirclePlus />
            </ActionIcon>
            <ActionText>Create an assessment</ActionText>
          </ActionItem>
          <ActionItem>
            <ActionIcon>
              <FaFileAlt />
            </ActionIcon>
            <ActionText>View Assessments</ActionText>
          </ActionItem>
          <ActionItem>
            <ActionIcon>
              <MdChecklist />
            </ActionIcon>
            <ActionText>View Students</ActionText>
          </ActionItem>
          <ActionItem>
            <ActionIcon>
              <FaFileInvoice />
            </ActionIcon>
            <ActionText>View Reports</ActionText>
          </ActionItem>
        </ActionContainer>
        <InputContainer>
          <LeftIcon>
            <MdInfo fontSize={'30px'} />
          </LeftIcon>
          <Input placeholder="      Enter your query here" />
          <RightIcon>
          <IoMdSend />
          </RightIcon>
        </InputContainer>
      </Main>
    </Container>
  );
};

export default FigmaDesign;