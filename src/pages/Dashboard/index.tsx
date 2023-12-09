import { LandingLayout } from "../../components";
import { ActivityForm } from "../../components/ActivityForm";
import { StatsCard } from "../../components/StatsCard";
import UserCard from "../../components/UserCard";

export const DashboardPage = () => {
  return (
    <LandingLayout>
      <UserCard />
      <StatsCard />
      <ActivityForm />
    </LandingLayout>
  );
};
