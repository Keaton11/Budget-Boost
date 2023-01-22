import budgetBoosterLogo from '../images/full-logo.jpg';
import Image from 'react-image-resizer';
import { TopBar, Frame, Card, Button } from '@shopify/polaris';

function MainMenu() {

  const logo = {
    width: 175,
    topBarSource: budgetBoosterLogo,
  };

  const topBarMarkup = (
    <TopBar/>
  );

    return (
        <div style={{height: '250px'}}>
            <Frame topBar={topBarMarkup} logo={logo}>

            <Card>
                <div className="image-container">
                    <Image
                        img src={budgetBoosterLogo} alt="logo"
                        height={350}
                        width={700}
                        style={{ alignSelf: 'center' }}
                    />
                </div>
                <div className="image-container">
                    <h1>Budget Booster helps users take control of their finances by providing personalized budgeting tools.</h1>
                </div>
                <>‎</>
                <div className="image-container">
                    <a href="/signin"><Button>Sign In</Button></a>
                </div>
                <>‎</>
                
            </Card>
                
            </Frame>
        </div>
    );
}

export default MainMenu;