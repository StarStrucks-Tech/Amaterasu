import {EmptyRequest} from '../gencode/protos-frontend/generic/GenericMessages';
import { NativeClient, ServiceClient } from './NativeClient';

/**
 * Class that can support the calling of RPCs if you define functions for RPC calls here
 */
class OnboardingRpcHelper {
    /**
     * function to call the getCurrentOnboardingStage RPC from the Backend Server
     * @returns promise of the GetCurrentOnboardingStage DTO 
     */
  public async getCurrentOnboardingStage() {
    console.log('port number :',await NativeClient.getHost())
    return await ServiceClient.getCurrentOnboardingStage(
      EmptyRequest.create(),
      {},
    ).response
    
  }
}

/**
 * Constant to support the RPC call functions in any screen or component lifecycle of the app
 */
export const OnboardingRpcCaller: OnboardingRpcHelper =
  new OnboardingRpcHelper();
