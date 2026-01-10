import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null
  }

  const buttonClass = (isActive: boolean) =>
    `p-2 rounded hover:bg-gray-100 transition-colors ${
      isActive ? 'bg-gray-200 text-primary font-bold' : 'text-gray-600'
    }`

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-gray-100 bg-white p-2 sticky top-0 z-10">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={buttonClass(editor.isActive('bold'))}
        title="Negrita"
      >
        <span className="material-symbols-outlined text-[20px]">format_bold</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={buttonClass(editor.isActive('italic'))}
        title="Cursiva"
      >
        <span className="material-symbols-outlined text-[20px]">format_italic</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={buttonClass(editor.isActive('strike'))}
        title="Tachado"
      >
        <span className="material-symbols-outlined text-[20px]">format_strikethrough</span>
      </button>

      <div className="w-px h-6 bg-gray-200 mx-1"></div>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={buttonClass(editor.isActive('heading', { level: 2 }))}
        title="Título 2"
      >
        <span className="material-symbols-outlined text-[20px]">format_h2</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={buttonClass(editor.isActive('heading', { level: 3 }))}
        title="Título 3"
      >
        <span className="material-symbols-outlined text-[20px]">format_h3</span>
      </button>

      <div className="w-px h-6 bg-gray-200 mx-1"></div>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={buttonClass(editor.isActive('bulletList'))}
        title="Lista con viñetas"
      >
        <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={buttonClass(editor.isActive('orderedList'))}
        title="Lista numerada"
      >
        <span className="material-symbols-outlined text-[20px]">format_list_numbered</span>
      </button>

      <div className="w-px h-6 bg-gray-200 mx-1"></div>

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={buttonClass(editor.isActive('blockquote'))}
        title="Cita"
      >
        <span className="material-symbols-outlined text-[20px]">format_quote</span>
      </button>
      <button
        onClick={() => {
            const url = window.prompt('URL del enlace:')
            if (url) {
                editor.chain().focus().setLink({ href: url }).run()
            }
        }}
        className={buttonClass(editor.isActive('link'))}
        title="Enlace"
      >
        <span className="material-symbols-outlined text-[20px]">link</span>
      </button>
      <button
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive('link')}
        className="p-2 rounded hover:bg-gray-100 text-gray-600 disabled:opacity-30"
        title="Quitar enlace"
      >
         <span className="material-symbols-outlined text-[20px]">link_off</span>
      </button>

       <div className="w-px h-6 bg-gray-200 mx-1"></div>

       <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="p-2 rounded hover:bg-gray-100 text-gray-600 disabled:opacity-30"
        title="Deshacer"
      >
        <span className="material-symbols-outlined text-[20px]">undo</span>
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="p-2 rounded hover:bg-gray-100 text-gray-600 disabled:opacity-30"
        title="Rehacer"
      >
        <span className="material-symbols-outlined text-[20px]">redo</span>
      </button>
    </div>
  )
}

const RichTextEditor = ({ content, onChange }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
            class: 'text-primary underline cursor-pointer'
        }
      }),
      Image
    ],
    content: content,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl focus:outline-none min-h-[500px] max-w-none p-8 text-gray-700',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  // Update content if changed externally (e.g. from initial load), but only if editor is empty to avoid loop
  // Note: For a robust implementation we might need useEffect hook listening to `content` prop change,
  // but strictly managing cursor position is complex. For this use case (Create/Edit), initial load is key.

  return (
    <div className="flex min-h-[500px] flex-col rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="flex-1 overflow-y-auto" />
    </div>
  )
}

export default RichTextEditor
