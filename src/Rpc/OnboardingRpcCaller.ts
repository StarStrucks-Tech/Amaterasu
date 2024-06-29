import {GrpcClient} from '@mitch528/react-native-grpc';
import {GetCurrentOnboardingStageResponse} from '../gencode/protos-frontend/onboarding/rpc';
import {FrontendServiceClient} from '../gencode/protos-frontend/frontend/FrontendService.client';
import {RNGrpcTransport} from './RNTransport';
import {EmptyRequest} from '../gencode/protos-frontend/generic/GenericMessages';

class OnboardingRpcHelper {
  public async getCurrentOnboardingStage() {
    const nativeClient = GrpcClient;
    nativeClient.setHost('0.tcp.in.ngrok.io:12935');
    nativeClient.setInsecure(true);
    
    const serviceClient = new FrontendServiceClient(
      new RNGrpcTransport(nativeClient),
    );
    
    console.log('port number :',await nativeClient.getHost())
    return await serviceClient.getCurrentOnboardingStage(
      EmptyRequest.create(),
      {},
    ).response
    
  }
}

export const OnboardingRpcCaller: OnboardingRpcHelper =
  new OnboardingRpcHelper();
