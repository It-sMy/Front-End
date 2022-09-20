import React from "react";
import { Wrap } from "../../../styles/common";
import SkillCardMemo from "../molecules/SkillCardMemo";
import SkillCardStack from "../molecules/SkillCardStack";

const ShowSkillSection = () => {
  return <Wrap id="Skills">
<div>
<SkillCardStack></SkillCardStack>
</div>
<div>
<SkillCardMemo title="Backend"></SkillCardMemo>
</div>

  </Wrap>;
};

export default ShowSkillSection;
