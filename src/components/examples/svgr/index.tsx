import {
  GithubIcon,
  LinkedinIcon,
  NextjsIcon,
  PankodIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@components/icons";
import React from "react";

export const SvgrExample: React.FC = () => {
  return (
    <div>
      <GithubIcon width={32} height={32} color="black" />
      <LinkedinIcon width={32} height={32} color="black" />
      <TwitterIcon width={32} height={32} color="black" />
      <YoutubeIcon width={32} height={32} color="black" />
      <NextjsIcon width={96} height={58} color="black" />
      <PankodIcon width={140} height={28} color="black" />
    </div>
  );
};
