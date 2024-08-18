import apiClient from '@/client/typescript/client';
import { DashboardDesktopView } from '@/components/dashboard/dashboard-desktop';
import { DashboardMobileView } from '@/components/dashboard/dashboard-mobile';
import { CustomStatusComponent } from '@/components/utility/4xx';
import CustomHead from '@/components/utility/custom-head';
import { getAllArticles } from '@/utils/contentful';
import { BASE_DASHBOARD_TITLE } from '@/utils/seo';
import { ArticleContentfulType, HabitCategory, VideoContentfulType } from '@/utils/types';
import useIsDesktop from '@/utils/useIsDesktop';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
  const isDesktop = useIsDesktop();
  const { query } = useRouter();
  const [homePageArticles, setHomePageArticles] = useState<ArticleContentfulType[]>();
  const [homePageVideos, setHomePageVideos] = useState<VideoContentfulType[]>();
  const [habitCategories, setHabitCategories] = useState<HabitCategory[]>([]);

  const getContentFulData = async (): Promise<void> => {
    const articles = await getAllArticles();
    setHomePageArticles(articles);

    setHomePageVideos([]);
  };

  const getHabits = async (): Promise<void> => {
    const habitCategories = await apiClient.habitApi.getHabits();
    setHabitCategories(habitCategories as HabitCategory[]);
  };

  useEffect(() => {
    getHabits();
    getContentFulData();
  }, []);

  if (query && query.error_description === 'user is blocked') {
    return (
      <CustomStatusComponent
        errorTitle="Your account no longer exists."
        errorMessage="To restore your account please contact administrator."
        buttonLabel="Go to Homepage"
        redirectUrl="/"
      />
    );
  }

  return (
    <>
      <CustomHead description={BASE_DASHBOARD_TITLE} title={BASE_DASHBOARD_TITLE} />
      {isDesktop
        ? homePageArticles &&
          homePageVideos &&
          habitCategories && (
            <DashboardDesktopView
              homePageContent={homePageArticles}
              homePageVideos={homePageVideos}
              habitCategories={habitCategories}
            />
          )
        : homePageArticles &&
          homePageVideos &&
          habitCategories && (
            <DashboardMobileView
              homePageContent={homePageArticles}
              homePageVideos={homePageVideos}
              habitCategories={habitCategories}
            />
          )}
    </>
  );
};

export default Dashboard;
