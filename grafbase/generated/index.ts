// This is a generated file. It should not be edited manually.
//
// You can decide to commit this file or add it to your `.gitignore`.
//
// By convention, this module is imported as `@grafbase/generated`. To make this syntax possible,
// add a `paths` entry to your `tsconfig.json`.
//
//  "compilerOptions": {
//    "paths": {
//      "@grafbase/generated": ["./grafbase/generated"]
//    }
//  }

export type Schema = {
  'learningStatus': | 'to_learn'| 'learning'| 'learned'| 'none';
  'linkAction': | 'like'| 'unlike'| 'complete'| 'uncomplete';
  'globalLinkAction': | 'like'| 'unlike'| 'complete'| 'uncomplete';
  'section': {
    title: string;
    summary: string | null;
    linkIds: Array<string>;
  };
  'updateGrafbaseKvOutput': {
    name: string;
    prettyName: string;
    connections: Array<string>;
  };
  'publicGetTopicsWithConnectionsOutput': {
    __typename?: 'publicGetTopicsWithConnectionsOutput';
    name: string;
    prettyName: string;
    connections: Array<string>;
  };
  'publicGetGlobalTopicsOutput': {
    __typename?: 'publicGetGlobalTopicsOutput';
    prettyName: string;
    name: string;
  };
  'GlobalLink': {
    __typename?: 'GlobalLink';
    id: string;
    title: string;
    url: string;
    protocol: string;
    year: string | null;
    description: string | null;
  };
  'globalGuideSection': {
    __typename?: 'globalGuideSection';
    title: string;
    summary: string | null;
    links?: Array<Schema['GlobalLink']>;
  };
  'latestGlobalGuide': {
    __typename?: 'latestGlobalGuide';
    summary: string;
    sections?: Array<Schema['globalGuideSection']>;
  };
  'publicGetGlobalTopicOutput': {
    __typename?: 'publicGetGlobalTopicOutput';
    prettyName: string;
    topicSummary: string;
    latestGlobalGuide?: Schema['latestGlobalGuide'] | null;
    links?: Array<Schema['GlobalLink']>;
    notesCount: number;
  };
  'getUserDetailsOutput': {
    __typename?: 'getUserDetailsOutput';
    isMember: boolean;
  };
  'getPricingUserDetailsOutput': {
    __typename?: 'getPricingUserDetailsOutput';
    stripePlan: string | null;
    memberUntil: string | null;
    subscriptionStopped: boolean | null;
  };
  'globalNote': {
    __typename?: 'globalNote';
    content: string;
    url: string | null;
  };
  'LikedLink': {
    __typename?: 'LikedLink';
    id: string;
    title: string;
    url: string;
  };
  'CompletedLink': {
    __typename?: 'CompletedLink';
    id: string;
    title: string;
    url: string;
  };
  'PersonalLink': {
    __typename?: 'PersonalLink';
    id: string;
    title: string;
    url: string;
  };
  'outputOfGetLikedLinks': {
    __typename?: 'outputOfGetLikedLinks';
    likedLinks?: Array<Schema['LikedLink']>;
    completedLinks?: Array<Schema['CompletedLink']>;
    personalLinks?: Array<Schema['PersonalLink']>;
  };
  'topicToLearn': {
    __typename?: 'topicToLearn';
    name: string;
    prettyName: string;
    verified: boolean;
  };
  'getTopicsLearnedOutput': {
    __typename?: 'getTopicsLearnedOutput';
    topicsToLearn?: Array<Schema['topicToLearn']>;
    topicsLearning?: Array<Schema['topicToLearn']>;
    topicsLearned?: Array<Schema['topicToLearn']>;
  };
  'publicGetGlobalLinkOutput': {
    __typename?: 'publicGetGlobalLinkOutput';
    title: string;
    url: string;
    verified: boolean;
    public: boolean;
    protocol: string | null;
    fullUrl: string | null;
    description: string | null;
    urlTitle: string | null;
    year: string | null;
  };
  'getGlobalTopicOutput': {
    __typename?: 'getGlobalTopicOutput';
    learningStatus: Schema['learningStatus'];
    likedLinkIds: Array<string>;
    completedLinkIds: Array<string>;
  };
  'getGlobalLinksOutput': {
    __typename?: 'getGlobalLinksOutput';
    id: string;
    title: string;
    url: string;
  };
  'Query': {
    __typename?: 'Query';
    publicGetTopicsWithConnections?: Array<Schema['publicGetTopicsWithConnectionsOutput']>;
    publicGetGlobalTopics?: Array<Schema['publicGetGlobalTopicsOutput']>;
    publicGetGlobalTopic?: Schema['publicGetGlobalTopicOutput'];
    getUserDetails?: Schema['getUserDetailsOutput'];
    getPricingUserDetails?: Schema['getPricingUserDetailsOutput'];
    getNotesForGlobalTopic?: Array<Schema['globalNote']>;
    getLikedLinks?: Schema['outputOfGetLikedLinks'];
    getTopicsLearned?: Schema['getTopicsLearnedOutput'];
    getGlobalLink?: Schema['publicGetGlobalLinkOutput'];
    getGlobalTopic?: Schema['getGlobalTopicOutput'];
    getGlobalTopicLearningStatus?: string;
    getGlobalLinks?: Schema['getGlobalLinksOutput'];
    checkUrl?: string;
    stripe?: string;
  };
  'Mutation': {
    __typename?: 'Mutation';
    createUser?: string;
    deletePersonalLink?: string;
    updateTopicLearningStatus?: string;
    updateLinkStatusResolver?: string;
    updateGlobalLinkStatus?: string;
    addPersonalLink?: string;
    cancelStripe?: string;
    renewStripe?: string;
    updateStripePlan?: string;
    internalUpdateMemberUntilOfUser?: string;
    internalUpdateGrafbaseKv?: string;
    internalUpdateLatestGlobalGuide?: string;
    internalAddGlobalLinkToSection?: string;
  };
};

import { ResolverFn } from '@grafbase/sdk'

export type Resolver = {
  'Query.publicGetTopicsWithConnections': ResolverFn<Schema['Query'], {  }, Array<Schema['publicGetTopicsWithConnectionsOutput']>>
  'Query.publicGetGlobalTopics': ResolverFn<Schema['Query'], {  }, Array<Schema['publicGetGlobalTopicsOutput']>>
  'Query.publicGetGlobalTopic': ResolverFn<Schema['Query'], { topicName: string,  }, Schema['publicGetGlobalTopicOutput']>
  'Query.getUserDetails': ResolverFn<Schema['Query'], {  }, Schema['getUserDetailsOutput']>
  'Query.getPricingUserDetails': ResolverFn<Schema['Query'], {  }, Schema['getPricingUserDetailsOutput']>
  'Query.getNotesForGlobalTopic': ResolverFn<Schema['Query'], { topicName: string,  }, Array<Schema['globalNote']>>
  'Query.getLikedLinks': ResolverFn<Schema['Query'], {  }, Schema['outputOfGetLikedLinks']>
  'Query.getTopicsLearned': ResolverFn<Schema['Query'], {  }, Schema['getTopicsLearnedOutput']>
  'Query.getGlobalLink': ResolverFn<Schema['Query'], { linkId: string,  }, Schema['publicGetGlobalLinkOutput']>
  'Query.getGlobalTopic': ResolverFn<Schema['Query'], { topicName: string,  }, Schema['getGlobalTopicOutput']>
  'Query.getGlobalTopicLearningStatus': ResolverFn<Schema['Query'], { topicName: string,  }, string>
  'Query.getGlobalLinks': ResolverFn<Schema['Query'], {  }, Schema['getGlobalLinksOutput']>
  'Query.checkUrl': ResolverFn<Schema['Query'], { linkUrl: string,  }, string>
  'Query.stripe': ResolverFn<Schema['Query'], { plan: string, userEmail: string,  }, string>
  'Mutation.createUser': ResolverFn<Schema['Mutation'], { email: string,  }, string>
  'Mutation.deletePersonalLink': ResolverFn<Schema['Mutation'], { personalLinkId: string,  }, string>
  'Mutation.updateTopicLearningStatus': ResolverFn<Schema['Mutation'], { learningStatus: Schema['learningStatus'], topicName: string, verifiedTopic: boolean,  }, string>
  'Mutation.updateLinkStatusResolver': ResolverFn<Schema['Mutation'], { linkId: string, action: Schema['linkAction'],  }, string>
  'Mutation.updateGlobalLinkStatus': ResolverFn<Schema['Mutation'], { action: Schema['globalLinkAction'], globalLinkId: string,  }, string>
  'Mutation.addPersonalLink': ResolverFn<Schema['Mutation'], { title: string, url: string, description: string | null,  }, string>
  'Mutation.cancelStripe': ResolverFn<Schema['Mutation'], {  }, string>
  'Mutation.renewStripe': ResolverFn<Schema['Mutation'], {  }, string>
  'Mutation.updateStripePlan': ResolverFn<Schema['Mutation'], {  }, string>
  'Mutation.internalUpdateMemberUntilOfUser': ResolverFn<Schema['Mutation'], { email: string, memberUntilDateInUnixTime: number, stripeSubscriptionObjectId: string, stripePlan: string,  }, string>
  'Mutation.internalUpdateGrafbaseKv': ResolverFn<Schema['Mutation'], { topicsWithConnections: Array<Schema['updateGrafbaseKvOutput']>,  }, string>
  'Mutation.internalUpdateLatestGlobalGuide': ResolverFn<Schema['Mutation'], { topicName: string, topicSummary: string, sections: Array<Schema['section']>,  }, string>
  'Mutation.internalAddGlobalLinkToSection': ResolverFn<Schema['Mutation'], { linkUrl: string, topicName: string, sectionName: string,  }, string>
}

