import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import constants from '../../../ui-constants/Constant.json';
import styles from './styles';
import appLogo from '../../../assets/images/applogo.png';
import GetCurrentStageHandler from '../../../onboarding/GetCurrentStageHandler';
import { GetCurrentOnboardingStageResponse } from '../../../gencode/protos-frontend/onboarding/rpc_responses';
import { OnboardingStage } from '../../../gencode/protos-frontend/enums/onboarding_stages';
import { SPLASH_STATE } from './enum';
import { Deeplink } from '../../../gencode/protos-frontend/deeplink/deeplink';
import SplashAnimation from '../../animation/splash-animation/anim';

const SplashScreen = () => {
  const [splashState, setSplashState] = useState(SPLASH_STATE.SPLASH_STATE_ANIMATION);
  const [nextActionScreen, setNextAction] = useState<Deeplink | undefined>();
  const btnClickHandler = () =>{
    
  }
  const responseHandler = useCallback((response: GetCurrentOnboardingStageResponse) => {
    const { currentStage, nextAction } = response;
    console.log("inside resp handler")
    switch (currentStage) {
      case OnboardingStage.ONBOARDING_STAGE_UNIDENTIFIED:
        setNextAction(nextAction);
        setSplashState(SPLASH_STATE.SPLASH_STATE_ACTION);
        break;
      case OnboardingStage.ONBOARDING_STAGE_PHONE_VERIFICATION:
      case OnboardingStage.ONBOARDING_STAGE_AADHAR_VERIFICATION:
      case OnboardingStage.ONBOARDING_STAGE_EMAIL_VERIFICATION:
      case OnboardingStage.ONBOARDING_STAGE_EXTRA_DETAILS:
      case OnboardingStage.ONBOARDING_STAGE_HOME_STRETCH:
      case OnboardingStage.ONBOARDING_STAGE_PAN_VERIFICATION:
      case OnboardingStage.ONBOARDING_STAGE_LIVENESS:
      case OnboardingStage.ONBOARDING_COMPLETED:
        break;
    }
  }, []);

  useEffect(() => {
    GetCurrentStageHandler(responseHandler);
  }, [responseHandler]);

  switch (splashState) {
    case SPLASH_STATE.SPLASH_STATE_ACTION:
      return (
        <View style={styles.container}>
          <Image source={appLogo} style={styles.image} />
          <Text style={styles.title}>{constants.TextConstants.TITLE}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{constants.TextConstants.BUTTON_TEXT}</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>{constants.TextConstants.FOOTER_TEXT}</Text>
        </View>
      );
    case SPLASH_STATE.SPLASH_STATE_ANIMATION:
      return <SplashAnimation />;
    case SPLASH_STATE.SPLASH_STATE_MOVE:
      return <></>;
    default:
      return null;
  }
};

export default SplashScreen;
