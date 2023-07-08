import { useEffect, useRef } from "react";

interface EventProps {
  icon?: string,
  iconLabel?: string,
  title?: string,
  subtitle?: string,
  slim?: boolean,
  onSize?: ({width, height}: {width: number, height: number}) => void
}

export const Event = (props: EventProps): JSX.Element => {
  const ref = useRef<HTMLLIElement>(null);
  const { onSize } = props;

  useEffect(() => {
    const cur = ref.current
      const width = cur ? cur.offsetWidth : 0;
      const height = cur ? cur.offsetHeight : 0;
      if (onSize) {
          onSize({ width, height });
      }
  });

  return <li ref={ref} className={'event' + (props.slim ? ' event_slim' : '')}>
            <button className="event__button">
                <span className={`event__icon event__icon_${props.icon || ''}`} role="img" aria-label={props.iconLabel}></span>
                <h4 className="event__title">{props.title}</h4>
                {props.subtitle &&
                    <span className="event__subtitle">{props.subtitle}</span>
                }
            </button>
        </li>;
};
