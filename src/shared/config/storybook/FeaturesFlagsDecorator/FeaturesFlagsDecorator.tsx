import { Story } from '@storybook/react';
import { FeatureFlags } from '@/shared/types/featureFlag';
import { setFeatureFlags } from '@/shared/lib/features';

export const FeaturesFlagsDecorator =
    (features: FeatureFlags) => (StoryComponent: Story) => {
        setFeatureFlags(features);
        return <StoryComponent />;
    };
