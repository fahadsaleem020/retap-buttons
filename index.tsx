import {
  isButtonActive,
  toggleBold,
  toggleBulletList,
  toggleNumberedList,
  toggleHeading,
  activeHeadingValue,
  toggleItalic,
  toggleStrike,
  toggleUnderline,
  toggleBlockQuote,
  toggleCodeBlock,
  setHardBreak,
  setHorizontalLine,
  toggleSubscript,
  toggleSuperscript,
  clearFormats,
  clearContents,
  setUndo,
  setRedo,
  setFontColor,
  unsetFontColor,
  setHighlightColor,
  unsetHighlightColor,
  canSink,
  canLift,
  sinkListItem,
  liftListItem,
  getFontColorValue,
  getHighlightColorValue,
  getFontFamilyValue,
  setFontFamily,
  setTextAlignment,
  isTextAlignmentValue,
  deleteTable,
  insertRowAfter,
  insertRowBefore,
  insertColumnAfter,
  insertColumnBefore,
  deleteColumn,
  deleteRow,
  mergeCells,
  splitCell,
  removeUrl,
  setFontSize,
  getTextAlignmentValue,
  getFontSizeValue,
  inrceaseTextIndent,
  decreaseTextIndent,
  isExtension,
} from "@retap/functions";

import {
  Checkbox,
  Flex,
  IconButton,
  Select,
  SelectProps,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  Text,
  HStack,
  useOutsideClick,
  IconButtonProps,
} from "@chakra-ui/react";
import { TfiYoutube } from "react-icons/tfi";
import {
  MdLink,
  MdLinkOff,
  MdFormatQuote,
  MdWrapText,
  MdHorizontalRule,
  MdSubscript,
  MdSuperscript,
  MdFormatClear,
  MdOutlineFormatIndentIncrease,
  MdOutlineFormatIndentDecrease,
  MdFormatAlignJustify,
  MdOutlineAddLink,
} from "react-icons/md";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignRight,
  AiOutlineAlignLeft,
  AiOutlineTable,
  AiOutlineClear,
  AiOutlineCode,
  AiOutlinePicture,
  AiOutlineYoutube,
  AiOutlineHighlight,
  AiOutlineFontColors,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
  AiOutlineItalic,
  AiOutlineBold,
  AiOutlineUndo,
  AiOutlineRedo,
  AiOutlineInsertRowAbove,
  AiOutlineInsertRowBelow,
  AiOutlineInsertRowLeft,
  AiOutlineInsertRowRight,
  AiOutlineDeleteColumn,
  AiOutlineDeleteRow,
  AiOutlineMergeCells,
  AiOutlineSplitCells,
  AiOutlineDelete,
  AiOutlineDrag,
} from "react-icons/ai";
import React, { useState, useRef, MouseEvent, DOMAttributes, FC } from "react";
import { TableComponent, LinkEditor, LinkModal } from "@retap/components";
import { RetapToolbarButtonProps, RenderElementFC } from "@retap/types";
import { useTable } from "@retap/hooks";
import { useRetap } from "@retap/provider";

export const BoldButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.bold?.replace;

  if (element)
    return renderElement({
      replace: element,
      onClick: () => toggleBold({ editor }),
    });

  return (
    <IconButton
      title="bold"
      aria-label="bold-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "bold" }) ? "solid" : "outline"
      }
      onClick={() => toggleBold({ editor })}
      icon={
        <AiOutlineBold
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.bold?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.bold}
    />
  );
};

export const VideoButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const { video } = useRetap();
  const element = buttonProps?.video?.replace!;

  if (element) {
    return renderElement({
      replace: element,
      onClick: () => video?.modalProps?.onOpen!(),
    });
  }

  return (
    <IconButton
      title="video"
      aria-label="video-modal-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "video" }) ? "solid" : "outline"
      }
      onClick={() => video?.modalProps?.onOpen!()}
      icon={
        <AiOutlineYoutube
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.video?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.video}
    />
  );
};

export const ClearFormatsButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.clearformats?.replace;

  if (element) {
    return renderElement({
      replace: element,
      onClick: () => clearFormats({ editor }),
    });
  }

  return (
    <IconButton
      title="clear format"
      aria-label="clear-format-button"
      variant={"outline"}
      onClick={() => clearFormats({ editor })}
      icon={
        <MdFormatClear
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.clearformats?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.clearformats}
    />
  );
};

export const BlockQuoteButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.blockquote?.replace;
  if (element)
    return renderElement({
      replace: element,
      onClick: () => toggleBlockQuote({ editor }),
    });

  return (
    <IconButton
      title="block quote"
      aria-label="blockquote-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "blockquote" })
          ? "solid"
          : "outline"
      }
      onClick={() => toggleBlockQuote({ editor })}
      icon={
        <MdFormatQuote
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.blockquote?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.blockquote}
    />
  );
};

export const ListButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const isAnyListActive =
    isButtonActive({ editor, nodeOrMark: "bulletList" }) ||
    isButtonActive({ editor, nodeOrMark: "orderedList" });
  const listElement = buttonProps?.list?.replace;
  const bulletListElement = buttonProps?.bulletList?.replace;
  const numberedListElement = buttonProps?.list?.orderedList?.replace;
  const sinkListNode = buttonProps?.list?.sinkList?.replace;
  const liftListNode = buttonProps?.list?.liftList?.replace;

  const iconButton = !isButtonActive({ editor, nodeOrMark: "bulletList" }) ? (
    <AiOutlineOrderedList
      size={20}
      {...buttonProps?.globalButtonProps?.iconstyles}
      {...buttonProps?.list?.iconstyles}
    />
  ) : (
    <AiOutlineUnorderedList
      size={20}
      {...buttonProps?.globalButtonProps?.iconstyles}
      {...buttonProps?.list?.iconstyles}
    />
  );

  return (
    <Menu>
      {listElement ? (
        renderElement({
          replace: listElement,
        })
      ) : (
        <MenuButton
          title="lists"
          as={IconButton}
          icon={iconButton}
          variant={isAnyListActive ? "solid" : "outline"}
          {...buttonProps?.globalButtonProps}
          {...buttonProps?.list}
        />
      )}

      <MenuList minW="4em">
        <MenuItem
          as="div"
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
          py={0.5}
          px={0}
        >
          {bulletListElement ? (
            renderElement({
              replace: bulletListElement,
              onClick: () => toggleBulletList({ editor }),
            })
          ) : (
            <BulletListButton
              editor={editor}
              bulletList={{ ...buttonProps?.list?.bulletList, m: "auto" }}
            />
          )}
        </MenuItem>
        <MenuItem
          as="div"
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
          py={0.5}
          px={0}
        >
          {numberedListElement ? (
            renderElement({
              replace: numberedListElement,
              onClick: () => toggleNumberedList({ editor }),
            })
          ) : (
            <NumberedListButton
              editor={editor}
              orderedList={{ ...buttonProps?.list?.orderedList, m: "auto" }}
            />
          )}
        </MenuItem>
        <MenuItem
          as="div"
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
          py={0.5}
          px={0}
        >
          {sinkListNode ? (
            renderElement({
              replace: sinkListNode,
              onClick: () => sinkListItem({ editor }),
            })
          ) : (
            <SinkListButton
              editor={editor}
              sinkList={{ ...buttonProps?.list?.sinkList, m: "auto" }}
            />
          )}
        </MenuItem>
        <MenuItem
          as="div"
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
          py={0.5}
          px={0}
        >
          {liftListNode ? (
            renderElement({
              replace: liftListNode,
              onClick: () => liftListItem({ editor }),
            })
          ) : (
            <LiftListButton
              editor={editor}
              liftList={{ ...buttonProps?.list?.liftList, m: "auto" }}
            />
          )}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const SinkListButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.sinkList?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => sinkListItem({ editor }),
    });
  }
  return (
    <IncreaseIndentButtonStatic
      title="sink list"
      disabled={!canSink({ editor })}
      variant={canSink({ editor }) ? "solid" : "outline"}
      onClick={() => sinkListItem({ editor })}
      icon={
        <MdOutlineFormatIndentIncrease
          size={20}
          {...globalButtonProps?.iconstyles}
          {...buttonProps?.sinkList?.iconstyles}
        />
      }
      aria-label="sink-list-button"
      {...globalButtonProps}
      {...buttonProps?.sinkList}
    />
  );
};

export const LiftListButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.liftList?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => liftListItem({ editor }),
    });
  }
  return (
    <DecreaseIndentButtonStatic
      title="lift list"
      disabled={!canLift({ editor })}
      variant={canLift({ editor }) ? "solid" : "outline"}
      onClick={() => liftListItem({ editor })}
      icon={
        <MdOutlineFormatIndentDecrease
          size={20}
          {...globalButtonProps?.iconstyles}
          {...buttonProps?.liftList?.iconstyles}
        />
      }
      aria-label="lift-list-button"
      {...globalButtonProps}
      {...buttonProps?.liftList}
    />
  );
};

export const BulletListButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.bulletList?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => toggleBulletList({ editor }),
    });
  }
  return (
    <IconButton
      title="bullet list"
      variant={
        isButtonActive({ editor, nodeOrMark: "bulletList" })
          ? "solid"
          : "outline"
      }
      onClick={() => toggleBulletList({ editor })}
      icon={
        <AiOutlineUnorderedList
          size={20}
          {...globalButtonProps?.iconstyles}
          {...buttonProps?.bulletList?.iconstyles}
        />
      }
      aria-label="bullet-list-button"
      {...globalButtonProps}
      {...buttonProps?.bulletList}
    />
  );
};

export const NumberedListButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.orderedList?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => toggleBulletList({ editor }),
    });
  }
  return (
    <IconButton
      title="numbered list"
      variant={
        isButtonActive({ editor, nodeOrMark: "orderedList" })
          ? "solid"
          : "outline"
      }
      onClick={() => toggleNumberedList({ editor })}
      icon={
        <AiOutlineOrderedList
          size={20}
          {...globalButtonProps?.iconstyles}
          {...buttonProps?.orderedList?.iconstyles}
        />
      }
      aria-label="numbered-list-button"
      {...globalButtonProps}
      {...buttonProps?.orderedList}
    />
  );
};

export const LinkInlineButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const [linkEditor, setLinkEditor] = useState(false);
  const element = buttonProps?.linkInline?.replace;

  if (element) {
    return (
      <Flex gap={2}>
        {renderElement({
          replace: element,
          onClick: () => setLinkEditor(!linkEditor),
        })}
        <LinkEditor
          editor={editor}
          isVisible={linkEditor}
          SetIsVisible={setLinkEditor}
        />
      </Flex>
    );
  }

  return (
    <Flex gap={2}>
      <IconButton
        title="link"
        aria-label="link-toggler-button"
        variant={
          isButtonActive({ editor, nodeOrMark: "link" }) ? "solid" : "outline"
        }
        icon={
          <MdLink
            size={20}
            {...buttonProps?.globalButtonProps?.iconstyles}
            {...buttonProps?.linkInline?.iconstyles}
          />
        }
        onClick={() => setLinkEditor(!linkEditor)}
        {...buttonProps?.globalButtonProps}
        {...buttonProps?.linkInline}
      />
      <LinkEditor
        editor={editor}
        isVisible={linkEditor}
        SetIsVisible={setLinkEditor}
      />
    </Flex>
  );
};

export const HeadingButton: FC<RetapToolbarButtonProps<SelectProps>> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.heading?.replace;
  if (element)
    return renderElement({
      replace: element,
      onChange: (e) => {
        toggleHeading({ editor, level: e.currentTarget.value });
      },
    });

  return (
    <Select
      title="heading"
      w="36"
      variant="filled"
      colorScheme="blue"
      onChange={(e) => toggleHeading({ editor, level: e.target.value })}
      value={activeHeadingValue({ editor }) || "paragraph"}
      {...(buttonProps?.globalButtonProps as SelectProps)}
      {...buttonProps?.heading}
    >
      <option value={"paragraph"}>paragraph</option>
      <option value={1}>Heading 1</option>
      <option value={2}>Heading 2</option>
      <option value={3}>Heading 3</option>
      <option value={4}>Heading 4</option>
      <option value={5}>Heading 5</option>
      <option value={6}>Heading 6</option>
    </Select>
  );
};

export const YoutubeButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.youtube?.replace;

  const { youtube } = useRetap();

  if (element) {
    return renderElement({
      replace: element,
      onClick: youtube?.modalProps?.onOpen!,
    });
  }

  return (
    <IconButton
      title="youtube"
      aria-label="youtube-modal-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "youtube" }) ? "solid" : "outline"
      }
      onClick={youtube?.modalProps?.onOpen!}
      icon={
        <TfiYoutube
          size={23}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.youtube?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.youtube}
    />
  );
};

export const ImageButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const { image } = useRetap();
  const element = buttonProps?.image?.replace;

  if (element) {
    return renderElement({
      replace: element,
      onClick: () => image?.modalProps?.onOpen!(),
    });
  }

  return (
    <IconButton
      title="image"
      aria-label="image-modal-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "image" }) ? "solid" : "outline"
      }
      onClick={() => image?.modalProps?.onOpen!()}
      icon={
        <AiOutlinePicture
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.image?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.image}
    />
  );
};

export const LinkButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const element = buttonProps?.link?.replace;

  if (element) {
    return (
      <>
        {renderElement({
          replace: element,
          onClick: onOpen,
        })}
        <LinkModal isOpen={isOpen} onClose={onClose} editor={editor} />
      </>
    );
  }

  return (
    <>
      <IconButton
        title="link"
        aria-label="link-editor-button"
        variant={
          isButtonActive({ editor, nodeOrMark: "link" }) ? "solid" : "outline"
        }
        onClick={onOpen}
        icon={
          <MdOutlineAddLink
            size={20}
            {...buttonProps?.globalButtonProps?.iconstyles}
            {...buttonProps?.link?.iconstyles}
          />
        }
        {...buttonProps?.globalButtonProps}
        {...buttonProps?.link}
      />
      <LinkModal isOpen={isOpen} onClose={onClose} editor={editor} />
    </>
  );
};

export const ClearLinkButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.clearLink?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => removeUrl({ editor }),
    });
  }

  const iconButton = (
    <MdLinkOff
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.clearLink?.iconstyles}
    />
  );

  return (
    <IconButton
      title="remove link"
      variant={
        isButtonActive({ editor, nodeOrMark: "link" }) ? "solid" : "outline"
      }
      icon={iconButton}
      onClick={() => removeUrl({ editor })}
      aria-label="remove-url-button"
      {...globalButtonProps}
      {...buttonProps?.clearLink}
    />
  );
};

export const ItalicButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.italic?.replace;
  if (element)
    return renderElement({
      replace: element,
      onClick: () => toggleItalic({ editor }),
    });

  return (
    <IconButton
      title="italic"
      aria-label="italic-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "italic" }) ? "solid" : "outline"
      }
      onClick={() => toggleItalic({ editor })}
      icon={
        <AiOutlineItalic
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.italic?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.italic}
    />
  );
};

export const StrikeButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.strike?.replace;
  if (element)
    return renderElement({
      replace: element,
      onClick: () => toggleStrike({ editor }),
    });

  return (
    <IconButton
      title="strike through"
      aria-label="strike-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "strike" }) ? "solid" : "outline"
      }
      onClick={() => toggleStrike({ editor })}
      icon={
        <AiOutlineStrikethrough
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.strike?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.strike}
    />
  );
};

export const UnderlineButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.underline?.replace;
  if (element)
    return renderElement({
      replace: element,
      onClick: () => toggleUnderline({ editor }),
    });

  return (
    <IconButton
      title="underline"
      aria-label="underline-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "underline" })
          ? "solid"
          : "outline"
      }
      onClick={() => toggleUnderline({ editor })}
      icon={
        <AiOutlineUnderline
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.underline?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.underline}
    />
  );
};

export const CodeBlockButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.codeBlock?.replace;
  if (element)
    return renderElement({
      replace: element,
      onClick: () => toggleCodeBlock({ editor }),
    });

  return (
    <IconButton
      title="code block"
      aria-label="codeBlock-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "codeBlockLowLight" })
          ? "solid"
          : "outline"
      }
      onClick={() => toggleCodeBlock({ editor })}
      icon={
        <AiOutlineCode
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.codeBlock?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.codeBlock}
    />
  );
};

export const HardBreakButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.hardbreak?.replace;

  return element ? (
    renderElement({
      replace: element,
      onClick: () => setHardBreak({ editor }),
    })
  ) : (
    <IconButton
      title="break line"
      aria-label="hardBreak-button"
      variant={"outline"}
      onClick={() => setHardBreak({ editor })}
      icon={
        <MdWrapText
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.hardbreak?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.codeBlock}
    />
  );
};

export const SubscriptButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.subscript?.replace;
  if (element)
    return renderElement({
      replace: element,
      onClick: () => toggleSubscript({ editor }),
    });

  return (
    <IconButton
      title="subscript"
      aria-label="subscript-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "subscript" })
          ? "solid"
          : "outline"
      }
      onClick={() => toggleSubscript({ editor })}
      icon={
        <MdSubscript
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.subscript?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.subscript}
    />
  );
};

export const SuperscriptButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.subscript?.replace;
  if (element)
    return renderElement({
      replace: element,
      onClick: () => toggleSuperscript({ editor }),
    });

  return (
    <IconButton
      title="superscript"
      aria-label="superscript-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "superscript" })
          ? "solid"
          : "outline"
      }
      onClick={() => toggleSuperscript({ editor })}
      icon={
        <MdSuperscript
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.superscript?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.superscript}
    />
  );
};

export const FontColorButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.fontcolor?.replace;
  const colorList = buttonProps?.fontcolor?.colorList;

  const colors = [
    ["gray", "blue", "green", "red", "yellow"],
    [50, 100, 200, 300, 400, 500, 600, 700, 800],
  ];

  const handler = (e: MouseEvent<HTMLDivElement>) => {
    const cssObject = getComputedStyle(e.target as any);
    const bgColor = cssObject.backgroundColor;
    setFontColor({ editor, color: bgColor });
  };

  return (
    <Menu>
      {element ? (
        renderElement({
          replace: element,
        })
      ) : (
        <MenuButton
          title="text color"
          as={IconButton}
          aria-label="font-color-picker"
          icon={
            <AiOutlineFontColors
              size={20}
              color={getFontColorValue({ editor })}
              {...buttonProps?.globalButtonProps?.iconstyles}
              {...buttonProps?.fontcolor?.iconstyles}
            />
          }
          variant="outline"
          {...buttonProps?.globalButtonProps}
          {...buttonProps?.fontcolor}
        ></MenuButton>
      )}

      <MenuList>
        {colorList &&
          colorList.map((val, i) => {
            return (
              <MenuItem
                as="div"
                minW="14em"
                key={i}
                py={0.5}
                _focus={{ bg: "none" }}
                _hover={{ bg: "none" }}
              >
                <Flex w="100%">
                  {val.flatMap((colorVal, p) => {
                    return (
                      <Box
                        flex={1}
                        key={p}
                        rounded="none"
                        onClick={handler}
                        bg={colorVal}
                        _hover={{ transform: "scale(1.1)" }}
                        w="7"
                        h="7"
                      />
                    );
                  })}
                </Flex>
              </MenuItem>
            );
          })}
        {!colorList &&
          colors[0].map((color, i) => {
            return (
              <MenuItem
                as="div"
                minW="14em"
                key={i}
                py={0.5}
                _focus={{ bg: "none" }}
                _hover={{ bg: "none" }}
              >
                <Flex w="100%">
                  {colors[1].map((index, p) => {
                    return (
                      <Box
                        flex={1}
                        key={p}
                        rounded="none"
                        onClick={handler}
                        bg={`${color}.${index}`}
                        _hover={{ transform: "scale(1.1)" }}
                        w="7"
                        h="7"
                      />
                    );
                  })}
                </Flex>
              </MenuItem>
            );
          })}
        <MenuItem
          as="div"
          py={0.5}
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
        >
          <Button
            variant="outline"
            rounded="full"
            w="full"
            size="sm"
            onClick={() => unsetFontColor({ editor })}
          >
            unset color
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const HighlightColorButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.highlightcolor?.replace;
  const colorList = buttonProps?.highlightcolor?.colorList;

  const colors = [
    ["gray", "blue", "green", "red", "yellow"],
    [100, 200, 300, 400],
  ];

  const handler = (e: MouseEvent<HTMLDivElement>) => {
    const cssObject = getComputedStyle(e.target as any);
    const bgColor = cssObject.backgroundColor;
    setHighlightColor({ editor, color: bgColor });
  };

  return (
    <Menu>
      {element ? (
        renderElement({
          replace: element,
        })
      ) : (
        <MenuButton
          title="text highlight"
          as={IconButton}
          aria-label="font-color-picker"
          icon={
            <AiOutlineHighlight
              size={20}
              color={getHighlightColorValue({ editor })}
              {...buttonProps?.globalButtonProps?.iconstyles}
              {...buttonProps?.highlightcolor?.iconstyles}
            />
          }
          variant="outline"
          {...buttonProps?.globalButtonProps}
          {...buttonProps?.highlightcolor}
        />
      )}
      <MenuList>
        {colorList &&
          colorList.map((v, i) => {
            return (
              <MenuItem
                as="div"
                bg="none"
                minW="14em"
                key={i}
                py={0.5}
                _focus={{ bg: "none" }}
                _hover={{ bg: "none" }}
              >
                <Flex w="100%">
                  {v.flatMap((colorValue, p) => {
                    return (
                      <Box
                        flex={1}
                        key={p}
                        rounded="none"
                        onClick={handler}
                        bg={colorValue}
                        _hover={{ transform: "scale(1.1)" }}
                        w="7"
                        h="7"
                      />
                    );
                  })}
                </Flex>
              </MenuItem>
            );
          })}
        {!colorList &&
          colors[0].map((color, i) => {
            return (
              <MenuItem
                as="div"
                bg="none"
                minW="14em"
                key={i}
                py={0.5}
                _focus={{ bg: "none" }}
                _hover={{ bg: "none" }}
              >
                <Flex w="100%">
                  {colors[1].map((index, p) => {
                    return (
                      <Box
                        flex={1}
                        key={p}
                        rounded="none"
                        onClick={handler}
                        bg={`${color}.${index}`}
                        _hover={{ transform: "scale(1.1)" }}
                        w="7"
                        h="7"
                      />
                    );
                  })}
                </Flex>
              </MenuItem>
            );
          })}
        <MenuItem
          as="div"
          bg="none"
          py={0.5}
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
        >
          <Button
            variant="outline"
            rounded="full"
            w="full"
            size="sm"
            onClick={() => unsetHighlightColor({ editor })}
          >
            unset highlight
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const HorizontalLineButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.horizontalline?.replace;

  return element ? (
    renderElement({
      replace: element,
      onClick: () => setHorizontalLine({ editor }),
    })
  ) : (
    <IconButton
      title="horizontal line"
      aria-label="horizontalLine-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "horizontalRule" })
          ? "solid"
          : "outline"
      }
      onClick={() => setHorizontalLine({ editor })}
      icon={
        <MdHorizontalRule
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.horizontalline?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.horizontalline}
    />
  );
};

export const UndoButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.undo?.replace;
  return element ? (
    renderElement<DOMAttributes<HTMLButtonElement>>({
      replace: element,
      onClick: () => setUndo({ editor }),
      disabled: !isExtension(editor.can(), "undo").undo(),
    })
  ) : (
    <IconButton
      title="undo"
      aria-label="undo-button"
      disabled={!isExtension(editor.can(), "undo").undo()}
      variant={"outline"}
      onClick={() => setUndo({ editor })}
      icon={
        <AiOutlineUndo
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.undo?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.undo}
    />
  );
};

export const RedoButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.redo?.replace;
  return element ? (
    renderElement<DOMAttributes<HTMLButtonElement>>({
      replace: element,
      onClick: () => setRedo({ editor }),
      disabled: !isExtension(editor.can(), "redo").redo(),
    })
  ) : (
    <IconButton
      title="redo"
      aria-label="redo-button"
      disabled={!isExtension(editor.can(), "redo").redo()}
      variant={"outline"}
      onClick={() => setRedo({ editor })}
      icon={
        <AiOutlineRedo
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.redo?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.redo}
    />
  );
};

export const ClearContentsButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.clearcontents?.replace;

  return element ? (
    renderElement({
      replace: element,
      onClick: () => clearContents({ editor }),
    })
  ) : (
    <IconButton
      title="clear contents"
      aria-label="horizontalLine-button"
      variant={"outline"}
      onClick={() => clearContents({ editor })}
      icon={
        <AiOutlineClear
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.clearcontents?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.clearcontents}
    />
  );
};

export const FontFamilyButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.fontfamily?.replace;
  let fonts = buttonProps?.fontfamily?.fonts;
  if (!fonts) fonts = ["Segoe UI", "monospace", "Verdana", "cursive"];
  if (element)
    return renderElement({
      replace: element,
      onChange: (e) => {
        setFontFamily({
          editor,
          fontfamily: (e.target as HTMLSelectElement).value,
        });
      },
    });
  return (
    <Select
      title="font family"
      w="36"
      variant="filled"
      colorScheme="blue"
      onChange={(e) => {
        setFontFamily({ editor, fontfamily: e.target.value });
      }}
      value={getFontFamilyValue({ editor }) || "sans-serif"}
      {...(buttonProps?.globalButtonProps as SelectProps)}
      {...buttonProps?.fontfamily}
    >
      {fonts.map((val, i) => (
        <option key={i} value={val}>
          {val}
        </option>
      ))}
    </Select>
  );
};

export const TextAlignButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const textAlignElement = buttonProps?.textalign?.replace;
  const leftButtonElement = buttonProps?.textalign?.leftAlign?.replace;
  const rightButtonElement = buttonProps?.textalign?.rightAlign?.replace;
  const centerButtonElement = buttonProps?.textalign?.centerAlign?.replace;
  const justifyButtonElement = buttonProps?.textalign?.justifyText?.replace;

  const isAnyActive =
    isTextAlignmentValue({ editor, position: "left" }) ||
    isTextAlignmentValue({ editor, position: "right" }) ||
    isTextAlignmentValue({ editor, position: "center" }) ||
    isTextAlignmentValue({ editor, position: "justify" });

  const activeAlignValue = getTextAlignmentValue({ editor });

  var iconButton = (
    <AiOutlineAlignLeft
      size={20}
      {...buttonProps?.globalButtonProps?.iconstyles}
      {...buttonProps?.textalign?.iconstyles}
    />
  );

  if (activeAlignValue === "right") {
    iconButton = (
      <AiOutlineAlignRight
        size={20}
        {...buttonProps?.globalButtonProps?.iconstyles}
        {...buttonProps?.textalign?.leftAlign?.iconstyles}
      />
    );
  } else if (activeAlignValue === "center") {
    iconButton = (
      <AiOutlineAlignCenter
        size={20}
        {...buttonProps?.globalButtonProps?.iconstyles}
        {...buttonProps?.textalign?.leftAlign?.iconstyles}
      />
    );
  } else if (activeAlignValue === "justify") {
    iconButton = (
      <MdFormatAlignJustify
        size={20}
        {...buttonProps?.globalButtonProps?.iconstyles}
        {...buttonProps?.textalign?.leftAlign?.iconstyles}
      />
    );
  }

  return (
    <Menu>
      {textAlignElement ? (
        renderElement({
          replace: textAlignElement,
        })
      ) : (
        <MenuButton
          title="text align"
          as={IconButton}
          icon={iconButton}
          variant={isAnyActive ? "solid" : "outline"}
          {...buttonProps?.globalButtonProps}
          {...buttonProps?.textalign}
        />
      )}
      <MenuList minW="4em">
        <MenuItem
          as="div"
          py={0.5}
          px={0}
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
        >
          {leftButtonElement ? (
            renderElement({
              replace: leftButtonElement,
              onClick: () => setTextAlignment({ editor, position: "left" }),
            })
          ) : (
            <LeftAlignButton
              editor={editor}
              leftAlign={{ ...buttonProps?.textalign?.leftAlign, m: "auto" }}
              {...buttonProps?.textalign?.leftAlign}
            />
          )}
        </MenuItem>
        <MenuItem
          as="div"
          py={0.5}
          px={0}
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
        >
          {rightButtonElement ? (
            renderElement({
              replace: rightButtonElement,
              onClick: () => setTextAlignment({ editor, position: "right" }),
            })
          ) : (
            <RightAlignButton
              editor={editor}
              rightAlign={{ ...buttonProps?.textalign?.rightAlign, m: "auto" }}
              {...buttonProps?.textalign?.rightAlign}
            />
          )}
        </MenuItem>
        <MenuItem
          as="div"
          py={0.5}
          px={0}
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
        >
          {centerButtonElement ? (
            renderElement({
              replace: centerButtonElement,
              onClick: () => setTextAlignment({ editor, position: "center" }),
            })
          ) : (
            <CenterAlignButton
              editor={editor}
              centerAlign={{
                ...buttonProps?.textalign?.centerAlign,
                m: "auto",
              }}
              {...buttonProps?.textalign?.centerAlign}
            />
          )}
        </MenuItem>
        <MenuItem
          as="div"
          py={0.5}
          px={0}
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
        >
          {justifyButtonElement ? (
            renderElement({
              replace: justifyButtonElement,
              onClick: () => setTextAlignment({ editor, position: "justify" }),
            })
          ) : (
            <JustifyTextButton
              editor={editor}
              justifyText={{
                ...buttonProps?.textalign?.justifyText,
                m: "auto",
              }}
              {...buttonProps?.textalign?.justifyText}
            />
          )}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const FontSizeButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps.fontsize?.replace;
  const fontSizes = buttonProps.fontsize?.fontSizes ?? [
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
  ];
  if (element) {
    return renderElement({
      replace: element,
      onChange: (e) => setFontSize({ editor, fontSize: e.currentTarget.value }),
    });
  }

  const activeFontSizeValue = getFontSizeValue({ editor });

  return (
    <Select
      title="font size"
      w="36"
      variant="filled"
      colorScheme="blue"
      onChange={(e) => setFontSize({ editor, fontSize: e.currentTarget.value })}
      value={activeFontSizeValue ?? "16"}
      {...(buttonProps?.globalButtonProps as SelectProps)}
      {...buttonProps?.fontsize}
    >
      {fontSizes.map((val, i) => {
        return (
          <option key={i} value={val}>
            {val} px
          </option>
        );
      })}
    </Select>
  );
};

export const LeftAlignButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.leftAlign?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => setTextAlignment({ editor, position: "left" }),
    });
  }
  var iconButton = (
    <AiOutlineAlignLeft
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.leftAlign?.iconstyles}
    />
  );
  return (
    <LeftAlignButtonStatic
      title="align left"
      onClick={() => setTextAlignment({ editor, position: "left" })}
      aria-label="left-align-button"
      icon={iconButton}
      variant={
        isTextAlignmentValue({ editor, position: "left" }) ? "solid" : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.leftAlign}
    />
  );
};

export const RightAlignButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.rightAlign?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => setTextAlignment({ editor, position: "right" }),
    });
  }
  var iconButton = (
    <AiOutlineAlignRight
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.leftAlign?.iconstyles}
    />
  );
  return (
    <RightAlignButtonStatic
      title="align right"
      onClick={() => setTextAlignment({ editor, position: "right" })}
      aria-label="right-align-button"
      icon={iconButton}
      variant={
        isTextAlignmentValue({ editor, position: "right" })
          ? "solid"
          : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.rightAlign}
    />
  );
};

export const CenterAlignButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.centerAlign?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => setTextAlignment({ editor, position: "center" }),
    });
  }
  var iconButton = (
    <AiOutlineAlignCenter
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.leftAlign?.iconstyles}
    />
  );
  return (
    <CenterAlignButtonStatic
      title="align center"
      onClick={() => setTextAlignment({ editor, position: "center" })}
      aria-label="center-align-button"
      icon={iconButton}
      variant={
        isTextAlignmentValue({ editor, position: "center" })
          ? "solid"
          : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.centerAlign}
    />
  );
};

export const JustifyTextButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.justifyText?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => setTextAlignment({ editor, position: "justify" }),
    });
  }
  var iconButton = (
    <MdFormatAlignJustify
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.leftAlign?.iconstyles}
    />
  );
  return (
    <IconButton
      title="justify"
      onClick={() => setTextAlignment({ editor, position: "justify" })}
      aria-label="justify-align-button"
      icon={iconButton}
      variant={
        isTextAlignmentValue({ editor, position: "justify" })
          ? "solid"
          : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.justifyText}
    />
  );
};

export const TableButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const [isMenu, setIsMenu] = useState(false);
  const menuListRef = useRef(null);
  useOutsideClick({
    ref: menuListRef,
    handler: () => {
      setIsMenu(false);
    },
  });

  const tableProps = useTable({
    columns: buttonProps?.table?.colsamount ?? 5,
    rows: buttonProps?.table?.rowsamount ?? 5,
  });
  const {
    matrix: { columns, rows },
    setWithHeader,
  } = tableProps;

  const element = buttonProps?.table?.replace;

  return (
    <Menu isOpen={isMenu}>
      {element ? (
        renderElement({
          replace: element,
        })
      ) : (
        <MenuButton
          title="table"
          as={IconButton}
          variant="outline"
          onClick={() => setIsMenu(!isMenu)}
          icon={
            <AiOutlineTable
              size={20}
              {...buttonProps?.globalButtonProps?.iconstyles}
              {...buttonProps?.table?.iconstyles}
            />
          }
          {...buttonProps?.globalButtonProps}
          {...buttonProps?.table}
        />
      )}
      <MenuList p="8px" minW="1em" ref={menuListRef}>
        <MenuItem
          as="div"
          display="block"
          p={0}
          _focus={{ bg: "none" }}
          _hover={{ bg: "none" }}
          cursor="default"
        >
          <HStack justifyContent="space-between" py="1">
            <Text fontSize="xs">columns: {columns}</Text>
            <Text fontSize="xs">Rows: {rows}</Text>
          </HStack>
          <TableComponent
            editor={editor}
            borderColor={buttonProps?.globalButtonProps?.color}
            bg={buttonProps?.globalButtonProps?.color}
            {...(buttonProps?.table as any)}
            {...tableProps}
          />
          <Checkbox
            py="1"
            defaultChecked
            onChange={(e) => {
              setWithHeader(e.target.checked);
            }}
            colorScheme="blue"
          >
            <Text fontSize="xs">With Header</Text>
          </Checkbox>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const DeleteTableButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.deleteTable?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => deleteTable({ editor }),
    });
  }

  const buttonIcon = (
    <AiOutlineDelete
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.deleteTable?.iconstyles}
    />
  );

  return (
    <DeleteButtonStatic
      title="delete table"
      icon={buttonIcon}
      aria-label="delete-button"
      onClick={() => deleteTable({ editor })}
      variant={
        isButtonActive({ editor, nodeOrMark: "table" }) ? "solid" : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.deleteTable}
    />
  );
};

export const InsertRowBelowButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.insertRowBelow?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => insertRowAfter({ editor }),
    });
  }

  const buttonIcon = (
    <AiOutlineInsertRowBelow
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.insertRowBelow?.iconstyles}
    />
  );

  return (
    <IconButton
      title="insert row below"
      icon={buttonIcon}
      aria-label="insert-row-below-button"
      onClick={() => insertRowAfter({ editor })}
      variant={
        isButtonActive({ editor, nodeOrMark: "table" }) ? "solid" : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.insertRowBelow}
    />
  );
};

export const InsertRowAboveButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.insertRowAbove?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => insertRowBefore({ editor }),
    });
  }

  const buttonIcon = (
    <AiOutlineInsertRowAbove
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.insertRowAbove?.iconstyles}
    />
  );

  return (
    <IconButton
      title="insert row above"
      icon={buttonIcon}
      aria-label="insert-row-above-button"
      onClick={() => insertRowBefore({ editor })}
      variant={
        isButtonActive({ editor, nodeOrMark: "table" }) ? "solid" : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.insertRowAbove}
    />
  );
};

export const InsertColumnRightButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.insertColumnRight?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => insertColumnAfter({ editor }),
    });
  }

  const buttonIcon = (
    <AiOutlineInsertRowRight
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.insertColumnRight?.iconstyles}
    />
  );

  return (
    <IconButton
      title="insert column right"
      icon={buttonIcon}
      aria-label="insert-column-right-button"
      onClick={() => insertColumnAfter({ editor })}
      variant={
        isButtonActive({ editor, nodeOrMark: "table" }) ? "solid" : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.insertColumnRight}
    />
  );
};

export const InsertColumnLeftButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.insertColumnLeft?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => insertColumnBefore({ editor }),
    });
  }

  const buttonIcon = (
    <AiOutlineInsertRowLeft
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.insertColumnLeft?.iconstyles}
    />
  );

  return (
    <IconButton
      title="insert column left"
      icon={buttonIcon}
      aria-label="insert-column-left-button"
      onClick={() => insertColumnBefore({ editor })}
      variant={
        isButtonActive({ editor, nodeOrMark: "table" }) ? "solid" : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.insertColumnLeft}
    />
  );
};

export const DeleteColumnButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.deleteColumn?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => deleteColumn({ editor }),
    });
  }

  const buttonIcon = (
    <AiOutlineDeleteColumn
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.deleteColumn?.iconstyles}
    />
  );

  return (
    <IconButton
      title="delete column"
      icon={buttonIcon}
      aria-label="delete-column-button"
      onClick={() => deleteColumn({ editor })}
      variant={
        isButtonActive({ editor, nodeOrMark: "table" }) ? "solid" : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.deleteColumn}
    />
  );
};

export const DeleteRowButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.deleteRow?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => deleteRow({ editor }),
    });
  }

  const buttonIcon = (
    <AiOutlineDeleteRow
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.deleteRow?.iconstyles}
    />
  );

  return (
    <IconButton
      title="delete row"
      icon={buttonIcon}
      aria-label="delete-row-button"
      onClick={() => deleteRow({ editor })}
      variant={
        isButtonActive({ editor, nodeOrMark: "table" }) ? "solid" : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.deleteRow}
    />
  );
};

export const MergeCellsButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.mergeCells?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => mergeCells({ editor }),
    });
  }

  const buttonIcon = (
    <AiOutlineMergeCells
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.mergeCells?.iconstyles}
    />
  );

  return (
    <IconButton
      title="merge cells"
      icon={buttonIcon}
      aria-label="merge-cells-button"
      onClick={() => mergeCells({ editor })}
      variant={
        isButtonActive({ editor, nodeOrMark: "table" }) ? "solid" : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.mergeCells}
    />
  );
};

export const SplitCellButton: FC<RetapToolbarButtonProps> = ({
  editor,
  globalButtonProps,
  ...buttonProps
}) => {
  const element = buttonProps?.splitCell?.replace;
  if (element) {
    return renderElement({
      replace: element,
      onClick: () => splitCell({ editor }),
    });
  }

  const buttonIcon = (
    <AiOutlineSplitCells
      size={20}
      {...globalButtonProps?.iconstyles}
      {...buttonProps?.splitCell?.iconstyles}
    />
  );

  return (
    <IconButton
      title="split cells"
      icon={buttonIcon}
      aria-label="split-cells-button"
      onClick={() => splitCell({ editor })}
      variant={
        isButtonActive({ editor, nodeOrMark: "table" }) ? "solid" : "outline"
      }
      {...globalButtonProps}
      {...buttonProps?.splitCell}
    />
  );
};

export const IncreaseIndentButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.increaseIndent?.replace;

  if (element)
    return renderElement({
      replace: element,
      onClick: () => inrceaseTextIndent({ editor }),
    });

  return (
    <IconButton
      title="increase Indent"
      aria-label="increase-indent-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "textIndent" })
          ? "solid"
          : "outline"
      }
      onClick={() => inrceaseTextIndent({ editor })}
      icon={
        <MdOutlineFormatIndentIncrease
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.increaseIndent?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.increaseIndent}
    />
  );
};

export const DecreaseIndentButton: FC<RetapToolbarButtonProps> = ({
  editor,
  ...buttonProps
}) => {
  const element = buttonProps?.decreaseIndent?.replace;

  if (element)
    return renderElement({
      replace: element,
      onClick: () => decreaseTextIndent({ editor }),
    });

  return (
    <IconButton
      title="declrease Indent"
      aria-label="declrease-indent-button"
      variant={
        isButtonActive({ editor, nodeOrMark: "textIndent" })
          ? "solid"
          : "outline"
      }
      onClick={() => decreaseTextIndent({ editor })}
      icon={
        <MdOutlineFormatIndentDecrease
          size={20}
          {...buttonProps?.globalButtonProps?.iconstyles}
          {...buttonProps?.decreaseIndent?.iconstyles}
        />
      }
      {...buttonProps?.globalButtonProps}
      {...buttonProps?.decreaseIndent}
    />
  );
};

export const DraggableButtonStatic: FC<Partial<IconButtonProps>> = (props) => {
  return (
    <IconButton
      data-drag-handle
      icon={<AiOutlineDrag size={18} />}
      cursor="move"
      aria-label="draggable-button"
      {...props}
    />
  );
};
export const LeftAlignButtonStatic: FC<IconButtonProps> = (props) => {
  return <IconButton icon={<AiOutlineAlignLeft size={20} />} {...props} />;
};
export const RightAlignButtonStatic: FC<IconButtonProps> = (props) => {
  return <IconButton icon={<AiOutlineAlignRight size={20} />} {...props} />;
};
export const CenterAlignButtonStatic: FC<IconButtonProps> = (props) => {
  return <IconButton icon={<AiOutlineAlignCenter size={20} />} {...props} />;
};
export const DeleteButtonStatic: FC<IconButtonProps> = (props) => {
  return <IconButton icon={<AiOutlineDelete size={20} />} {...props} />;
};
export const IncreaseIndentButtonStatic: FC<IconButtonProps> = (props) => {
  return (
    <IconButton icon={<MdOutlineFormatIndentIncrease size={20} />} {...props} />
  );
};
export const DecreaseIndentButtonStatic: FC<IconButtonProps> = (props) => {
  return (
    <IconButton icon={<MdOutlineFormatIndentDecrease size={20} />} {...props} />
  );
};

const renderElement: RenderElementFC = ({
  replace: element,
  ...buttonAttrs
}) => {
  return <Button {...buttonAttrs}>{element}</Button>;
};
