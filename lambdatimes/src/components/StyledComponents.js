import styled from 'styled-components'


const TopBarr = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
;`

const Container = styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
;`

const ContainerLeft = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
;`

const ContainerCenter = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
;`

const ContainerRight = styled.div`
display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
;`

const TopBarrSpan = styled.span`
cursor: pointer;
  margin-right: 5%;
;`

const ContainerLeftSpan = styled.span`
cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
;`

const ContainerRightSpan = styled.span`
cursor: pointer;
;`

//---^^^-- ABOVE ARE TOPBAR COMPONENTS --^^^---

//---vvv-- BELOW ARE HEADER COMPONENTS --vvv---

const Headerr = styled.span `
display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
;`

const HeaderH1 = styled.span `
font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
;`

const HeaderSpan = styled.span `
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
;`


const HeaderDate = styled.span `
margin-left: 25px;
  flex: 1;
;`



const HeaderTemp = styled.span `
text-align: right;
  margin-right: 25px;
  flex: 1;
;`



export {ContainerRight, ContainerCenter, ContainerLeft, Container, TopBarr, ContainerRightSpan, ContainerLeftSpan, TopBarrSpan, Headerr, HeaderH1, HeaderSpan, HeaderDate, HeaderTemp};