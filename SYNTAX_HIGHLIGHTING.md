# Syntax Highlighting Class Reference

Use these semantic CSS classes for syntax highlighting in all code content components. They automatically update based on the selected theme.

## Available Classes

| Class Name | Use For | Example |
|------------|---------|---------|
| `syntax-comment` | Comments | `// This is a comment` |
| `syntax-keyword` | Keywords | `const`, `import`, `export`, `function`, `class` |
| `syntax-string` | String literals | `"Hello World"`, `'text'` |
| `syntax-number` | Numbers | `42`, `3.14` |
| `syntax-function` | Function names | `myFunction`, function identifiers |
| `syntax-variable` | Variable names | Property names, parameters |
| `syntax-type` | Types | `string`, `number`, `MyInterface` |

## Migration Pattern

**Before (hardcoded colors):**
```tsx
<span className="text-purple-400">const</span>
<span className="text-yellow-400">myVariable</span>
<span className="text-orange-400">"string value"</span>
<span className="text-blue-400">MyType</span>
<span className="text-green-400">propertyName</span>
```

**After (theme-aware):**
```tsx
<span className="syntax-keyword">const</span>
<span className="syntax-function">myVariable</span>
<span className="syntax-string">"string value"</span>
<span className="syntax-type">MyType</span>
<span className="syntax-variable">propertyName</span>
```

## Benefits

1. **Automatic theme updates** - Colors change when user switches theme
2. **Semantic naming** - Clear intent of what each color represents
3. **Maintainable** - Update once in CSS, applies everywhere
4. **Consistent** - All components use the same syntax colors
5. **Future-proof** - New components just use these classes

## Components to Update

- [x] globals.css - Classes created
- [ ] AboutContent.tsx
- [ ] ProjectsContent.tsx
- [ ] SkillsContent.tsx
- [ ] ContactContent.tsx
- [ ] ReadmeContent.tsx
- [ ] Any future content components

## Quick Find & Replace

Use these patterns in your editor:

- `text-purple-400` → `syntax-keyword`
- `text-yellow-400` → `syntax-function`
- `text-orange-400` → `syntax-string`
- `text-green-400` → `syntax-variable`
- `text-blue-400` → `syntax-type`
- `text-gray-500` → `syntax-comment`
