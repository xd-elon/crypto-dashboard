import styled from "styled-components";

export const LateralBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #E7E8FC;
  width: 4vw;
  height: 100vh;

  .IconLogo {
    //background-color: #E7E8FC;
    height: 6vh;
    width: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 30px;
      cursor: pointer;
    }
  }

  .ActionsIcons {
    height: 50vh;
    margin-bottom: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .activeSection {
      border: 2px solid #E7E8FC;
    }

    div {
      width: 35px;
      height: 35px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      :hover {
        background-color: #E7E8FC;
      }
    }
  }

  .PowerButton {
    cursor: pointer;
    height: 6vh;
    width: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 1px;
    img {
      width: px;
    }
  }
`;
