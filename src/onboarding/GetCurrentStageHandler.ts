import { OnboardingRpcCaller } from '../rpc/OnboardingRpcCaller';
import { GetCurrentOnboardingStageResponse } from '../gencode/protos-frontend/onboarding/rpc_responses';

export default function GetCurrentStageHandler(
    whatToDo: (resp: GetCurrentOnboardingStageResponse) => void
    ) {
        console.log('inside current stage handler')
    OnboardingRpcCaller.getCurrentOnboardingStage()
    .then(response =>whatToDo(response))
    .catch((error:any)=>{
        console.log('Error in the GetCurrentStageHandler',error)
    })
}