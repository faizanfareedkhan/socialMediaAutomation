import DashboardLayout from "@/layout/DashboardLayout";
import Home from "@/pages/dashboard/home/Home";
import CreatePost from "@/pages/dashboard/postContent/createPost/CreatePost";
import { RouteObject } from "react-router-dom";
import PendingPosts from "@/pages/dashboard/postContent/pendingPosts/PendingPosts";
import CompletedPosts from "@/pages/dashboard/postContent/completedPosts/CompletedPosts";
import ScheduledPosts from "@/pages/dashboard/postContent/scheduledPosts/ScheduledPosts";
import MaybeLaterPosts from "@/pages/dashboard/postContent/maybeLaterPosts/MaybeLaterPosts";
import DeclinedPosts from "@/pages/dashboard/postContent/declinedPosts/DeclinedPosts";
import DeletedPosts from "@/pages/dashboard/postContent/deletedPosts/DeletedPosts";
import AllPosts from "@/pages/dashboard/postContent/allPosts/AllPosts";
import SocialMediaAccounts from "@/pages/dashboard/integerations/socialMediaAccounts/SocialMediaAccounts";
import ThirdPartyIntegrations from "@/pages/dashboard/integerations/thirdPartyIntegrations/ThirdPartyIntegrations";
import Subscription from '@/pages/dashboard/account/subscription/Subscription';
import Settings from '@/pages/dashboard/account/settings/Settings';
import MediaLibrary  from '@/pages/dashboard/mediaLibrary/MediaLibrary';
import Members from "@/pages/dashboard/members/Members";



const dashboardRoutes: RouteObject[] = [
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "post-content/create-post", element: <CreatePost /> },
      { path: "post-content/all-posts", element: <AllPosts /> },
      { path: "post-content/pending-posts", element: <PendingPosts /> },
      { path: "post-content/completed-posts", element: <CompletedPosts /> },
      { path: "post-content/scheduled-posts", element: <ScheduledPosts /> },
      {
        path: "post-content/maybe-later-posts",
        element: <MaybeLaterPosts />,
      },
      { path: "post-content/declined-posts", element: <DeclinedPosts /> },
      { path: "post-content/deleted-posts", element: <DeletedPosts /> },
      {
        path: "integrations/social-media-accounts",
        element: <SocialMediaAccounts />,
      },
      {
        path: "integrations/third-party-integrations",
        element: <ThirdPartyIntegrations />,
      },
      {
        path: "accounts/subscription",
        element: <Subscription />,
      },
      {
        path: "accounts/settings",
        element: <Settings />,
      },
      {
        path: "dashboard/media-library",
        element: <MediaLibrary/>,
      },
      {
        path: "members/Members",
        element: <Members/>,
      },
    ],
  },
];

export default dashboardRoutes;
