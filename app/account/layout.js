import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid md:grid-cols-[16rem_1fr] sm:grid-cols-[10rem_1fr] grid-cols-[3rem_1fr] h-full md:gap-12 gap-4">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
