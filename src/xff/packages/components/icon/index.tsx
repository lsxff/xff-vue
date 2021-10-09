import {tag, h, WeElement, OverwriteProps,classNames} from 'omi';

import * as css from './index.scss';

export type Attrs = {
    size?: number
    color?: string
    icon? : string
}

const tagName = 'xxf-icon'

declare global {
    namespace JSX {
        interface InstrinsicElements {
            [tagName]: Omi.Props & Attrs
        }
    }
}

export type Props = OverwriteProps<Attrs, {size: number, color: string}>

@tag(tagName)
export default class DDIcon extends WeElement<Props> {

    static css = css.default ? css.default : css

    static defaultProps = {
        size: 14,
        color: '',
        icon: '',
    }

    static propTypes = {
        size: Number,
        color: String,
        icon: String
    }
    
    render(props:Props) {
        let style = {
            fontSize: `${props.size}px`,
            color: `${props.color}`
        };
        let cls = classNames('iconfont', props.icon)
        return (
            <h.f>
                <i class={cls} style={style}></i>
            </h.f>       
        )
    }
}