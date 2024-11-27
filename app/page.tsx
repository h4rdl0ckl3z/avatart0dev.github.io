import { SectionAbout } from "@/components/contents/SectionAbout";
import { SectionConTect } from "@/components/contents/SectionContect";
import { SectionProject } from "@/components/contents/SectionProJect";
import { SectionSocial } from "@/components/contents/SectionSocial";
import { SectionWelCome } from "@/components/contents/SectionWelCome";
import { SectionWork } from "@/components/contents/SectionWork";

export default async function Home() {
  return (
    <main className="py-20">
      <SectionWelCome />
      <SectionAbout />
      <SectionWork />
      <SectionProject />
      <div className="columns-2xl">
        <SectionConTect />
        <SectionSocial />
      </div>
    </main>
  );
}
