import React from "react"
import { Collapsible, CollapsibleItem, Icon } from "react-materialize"

function About() {
  return (
    <Collapsible accordion>
      <CollapsibleItem
        expanded={false}
        header="Films"
        icon={<Icon>filter_drama</Icon>}
        node="div"
      >
        Here you can see the film, We have the information about films all over
        the world
      </CollapsibleItem>
      <CollapsibleItem
        expanded={false}
        header="Nation"
        icon={<Icon>place</Icon>}
        node="div"
      >
        Yeah, you do seem to have a little 'shit creek' action going.
      </CollapsibleItem>
      <CollapsibleItem
        expanded={false}
        header="Daily News"
        icon={<Icon>whatshot</Icon>}
        node="div"
      >
        You know, FYI, you can buy a paddle. Did you not plan for this
        contingency?
      </CollapsibleItem>
    </Collapsible>
  )
}

export default About
