import { AckMessage, AckMessageOptions } from '../../../../../messages'
import { IsValidMessageType, parseMessageType } from '../../../../../util/messageType'

export type V2CredentialAckMessageOptions = AckMessageOptions

/**
 * @see https://github.com/hyperledger/aries-rfcs/blob/master/features/0015-acks/README.md#explicit-acks
 */
export class V2CredentialAckMessage extends AckMessage {
  @IsValidMessageType(V2CredentialAckMessage.type)
  public readonly type = V2CredentialAckMessage.type.messageTypeUri
  public static readonly type = parseMessageType('https://didcomm.org/issue-credential/2.0/ack')
}
