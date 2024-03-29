import { StyleTextDecoration } from '../typings/enums'
import { TInstructionName } from '../typings/types'

export class Instruction {
  private _name: TInstructionName
  private _sortPriority: number
  private _value: number | string

  constructor(name: TInstructionName, value?: number | string) {
    this._name = name
    this._sortPriority = this._setSortPriority()
    this._value = value || this._setValue()
  }

  get name() {
    return this._name
  }
  get sortPriority() {
    return this._sortPriority
  }
  get value() {
    return this._value
  }
  set value(value: number | string) {
    this._value = value
  }

  /**
   * Sets the sorting priority.
   * @returns The sorting priority
   */
  private _setSortPriority() {
    switch (this._name) {
      case 'BACKGROUND_COLOR':
        return -6
      case 'COLOR':
        return -4
      case 'MARGIN_BOTTOM':
        return 10
      case 'MARGIN_LEFT':
        return -9
      case 'MARGIN_RIGHT':
        return 9
      case 'MARGIN_TOP':
        return -10
      case 'RESET':
        return 3
      case 'PADDING_LEFT':
        return -5
      case 'PADDING_RIGHT':
        return 2
      case 'TEXT_ALIGN_CENTER':
      case 'TEXT_ALIGN_LEFT':
      case 'TEXT_ALIGN_RIGHT':
        return -3
      case 'TEXT_DECORATION_ITALIC':
      case 'TEXT_DECORATION_STRONG':
      case 'TEXT_DECORATION_UNDERLINE':
        return -2
      case 'TEXT_TRANSFORM_CAPITALIZE':
      case 'TEXT_TRANSFORM_LOWERCASE':
      case 'TEXT_TRANSFORM_UPPERCASE':
        return -1
      case 'WIDTH':
        return 1
      default:
        return 0
    }
  }

  /**
   * Sets the instruction value.
   * @returns The instruction value
   */
  private _setValue() {
    switch (this._name) {
      case 'MARGIN_BOTTOM':
      case 'MARGIN_TOP':
        return '\n'
      case 'MARGIN_LEFT':
      case 'MARGIN_RIGHT':
      case 'PADDING_LEFT':
      case 'PADDING_RIGHT':
        return ' '
      case 'WIDTH':
        return 0
      case 'TEXT_DECORATION_ITALIC':
        return StyleTextDecoration.italic
      case 'TEXT_DECORATION_STRONG':
        return StyleTextDecoration.strong
      case 'TEXT_DECORATION_UNDERLINE':
        return StyleTextDecoration.underline
      default:
        return ''
    }
  }
}
