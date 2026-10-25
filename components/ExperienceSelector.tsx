"use client";
import {useRef,useState} from "react";
import SectionDepth from "./SectionDepth";
import {experience,LINKEDIN} from "../lib/content";

export default function ExperienceSelector(){
  const [selected,setSelected]=useState(0);
  const buttons=useRef<(HTMLButtonElement|null)[]>([]);
  const job=experience[selected];
  const select=(index:number)=>{setSelected(index);buttons.current[index]?.focus();};
  return <section className="experience-selector" aria-labelledby="experience-title"><SectionDepth/><div className="section-heading"><h2 id="experience-title">Where I’ve worked.</h2><a className="plain-link" href={LINKEDIN} target="_blank" rel="noreferrer">View LinkedIn profile</a></div><div className="experience-layout"><div className="company-list" role="tablist" aria-label="Choose a company" aria-orientation="vertical">{experience.map((item,index)=><button type="button" role="tab" id={`company-${index}`} aria-controls="experience-panel" aria-selected={index===selected} tabIndex={index===selected?0:-1} ref={element=>{buttons.current[index]=element;}} key={item.org} onClick={()=>setSelected(index)} onKeyDown={event=>{let next=index;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(index+1)%experience.length;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(index-1+experience.length)%experience.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=experience.length-1;else return;event.preventDefault();select(next);}}><strong>{item.org}</strong><span>{item.dates}</span></button>)}</div><div id="experience-panel" className="experience-panel" role="tabpanel" aria-labelledby={`company-${selected}`} tabIndex={0}><article key={job.org} className="job-detail"><div className="job-header"><h3>{job.role}</h3><span>{job.dates}</span></div><p className="job-overview">{job.note}</p><ul>{job.details.map(detail=><li key={detail}>{detail}</li>)}</ul><div className="job-focus" aria-label="Areas of work">{job.focus.map(item=><span key={item}>{item}</span>)}</div></article></div></div></section>;
}
