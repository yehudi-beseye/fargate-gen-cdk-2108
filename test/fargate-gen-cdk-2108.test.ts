import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as FargateGenCdk2108 from '../lib/fargate-gen-cdk-2108-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new FargateGenCdk2108.FargateGenCdk2108Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
