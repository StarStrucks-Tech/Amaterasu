import {EmptyRequest} from '../gencode/protos-frontend/generic/generic_messages.ts';
import {NativeClient, ServiceClient} from './NativeClient';

/**
 * Class that can support the calling of RPCs if you define functions for RPC calls here
 */
class OnboardingRpcHelper {
  /**
   * function to call the getCurrentOnboardingStage RPC from the Backend Server
   * @returns promise of the GetCurrentOnboardingStage DTO
   */
  public async getCurrentOnboardingStage() {
    await new Promise(resolve => setTimeout(resolve, 5000))
    console.log('port number :', await NativeClient.getHost());
    return await ServiceClient.getCurrentOnboardingStage(
      EmptyRequest.create(),
      {},
    ).response;
  }
}

/**
 * Constant to support the RPC call functions in any screen or component lifecycle of the app
 */
export const OnboardingRpcCaller: OnboardingRpcHelper =
  new OnboardingRpcHelper();
