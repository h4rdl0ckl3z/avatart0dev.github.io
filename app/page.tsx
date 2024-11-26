import { SectionAbout } from "@/components/contents/SectionAbout";
import { SectionConTect } from "@/components/contents/SectionContect";
import { SectionProject } from "@/components/contents/SectionProJect";
import { SectionSocial } from "@/components/contents/SectionSocial";
import { SectionWelCome } from "@/components/contents/SectionWelCome";
import { SectionWork } from "@/components/contents/SectionWork";

export default function Home() {
  return (
    <main className="py-10">
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
