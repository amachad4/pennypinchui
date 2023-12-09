import useGetUser from "@/hooks/useGetAppUser";

interface GuardProps {
  children: JSX.Element;
  excludedRoutes?: string[];
}

export default async function guard({ children, excludedRoutes }: GuardProps) {
    const data = await useGetUser();
    console.log(data);
  return <>{children}</>;
}
