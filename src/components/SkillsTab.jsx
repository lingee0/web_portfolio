import React from 'react';
import useCollapse from 'react-collapsed';
import styles from '../style';

const SkillsTab = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="flex-row justify-between items-center w-[70%] group relative overflow-hidden bg-blue-900/20 border-2 border-white/50 rounded-xl ss:mt-5 collapsible">
      <div
        className="text-gradient text-center font-poppins font-bold ss:text-[24px] text-[14px]"
        {...getToggleProps()}
      >
        {isExpanded ? 'Key skills -' : 'Key skills +'}
      </div>
      <div {...getCollapseProps()}>
        <div
          className={`text-gradient justify-between font-poppins flex-1 flex md:flex-row flex-col ${styles.flexCenter} ml-4 mr-4 relative`}
        >
          <div className="text-center w-[600px]">
            <h4 className="ss:text-[20px] text-[12px] font-bold ss:py-2 py-1">
              Programming Skills
            </h4>
            <ul className="ss:text-[14px] text-[10px]">
              <li>Python</li>
              <li>C</li>
              <li>Java</li>
              <li>C++</li>
              <li>MySQL</li>
              <li>HTML/CSS/JavaScript</li>
              <li>React+Vite+TailwindCSS</li>
            </ul>
          </div>
          <div className="text-center w-[600px]">
            <h4 className="ss:text-[20px] text-[12px] font-bold ss:py-2 py-1">
              Technical Skills
            </h4>
            <ul className="ss:text-[14px] text-[10px]">
              <li>MATLAB</li>
              <li>RStudio</li>
              <li>Microsoft Office</li>
            </ul>
          </div>
          <div className="text-center w-[600px]">
            <h4 className="ss:text-[20px] text-[12px] font-bold ss:py-2 py-1">
              Group Skills
            </h4>
            <ul className="ss:text-[14px] text-[10px]">
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
