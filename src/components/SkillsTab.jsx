import React from 'react';
import useCollapse from 'react-collapsed';
import styles from '../style';

const SkillsTab = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="flex-row justify-between items-center w-[70%] group relative overflow-hidden bg-discount-gradient border-2 border-white/50 rounded-xl ss:mt-5 collapsible">
      <div
        className="text-white text-center font-source_code_pro font-bold ss:text-[24px] text-[14px]"
        {...getToggleProps()}
      >
        {isExpanded ? 'Key skills -' : 'Key skills +'}
      </div>
      <div {...getCollapseProps()}>
        <div
          className={`text-white justify-between font-source_code_pro flex-1 flex md:flex-row flex-col ${styles.flexCenter} ml-4 mr-4 relative`}
        >
          <div className="text-center w-[600px]">
            <h4 className="ss:text-[20px] text-[12px] font-bold ss:py-2 py-5">
              programming skills
            </h4>
            <ul className="ss:text-[18px] text-[10px]">
              <li>python</li>
              <li>c</li>
              <li>java/c++</li>
              <li>MySQL</li>
              <li>html/css/javascript</li>
              <li>React+Vite+TailwindCSS</li>
            </ul>
          </div>
          <div className="text-center w-[600px]">
            <h4 className="ss:text-[20px] text-[12px] font-bold ss:py-2 py-5">
              technical skills
            </h4>
            <ul className="ss:text-[18px] text-[10px]">
              <li>MATLAB</li>
              <li>RStudio</li>
              <li>Microsoft Office</li>
            </ul>
          </div>
          <div className="text-center w-[600px]">
            <h4 className="ss:text-[20px] text-[12px] font-bold ss:py-2 py-5">
              group skills
            </h4>
            <ul className="ss:text-[18px] text-[10px]">
              <li>Leadership</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Hard Working</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
