import { FeatureFlags } from "../../types/featureFlag";

let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if(newFeatureFlags) {
        featureFlags = newFeatureFlags
    }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
    return featureFlags[flag]
}