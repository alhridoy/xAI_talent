# xAI Talent Search - Usage Guide

## 🎯 What Is This?

A semantic search engine to discover AI researchers and engineers at top organizations. Think of it as a specialized LinkedIn search that understands what you're looking for.

## 🔍 How to Search

### Basic Search

Just start typing in the search box. Results update automatically as you type!

**Examples:**
- `transformer` - Find experts in transformer models
- `computer vision` - Find computer vision researchers
- `reinforcement learning` - Find RL specialists
- `natural language processing` - Find NLP experts

### Search by Name

```
Geoffrey Hinton
Yann LeCun
Ilya Sutskever
```

### Search by Organization

```
Google DeepMind
OpenAI
Meta
Anthropic
```

### Search by Research Area

```
large language models
generative AI
deep learning
AI safety
neural networks
```

### Exact Phrase Search

Use quotes for exact matches:
```
"large language models"
"computer vision"
```

### Prefix Matching

Use asterisk (*) for prefix matching:
```
deep*        → deeplearning, deepmind, etc.
neural*      → neural networks, neural architecture, etc.
transform*   → transformer, transformers, etc.
```

## 🎚️ Filtering

### By Company

1. **Show All**: Check the "Show all organizations" box to see everyone
2. **Filter**: Uncheck the box and type a company name in the filter field

**Company Filter Examples:**
```
Google
DeepMind
OpenAI
Meta
Anthropic
```

The company filter works with partial matches, so:
- `Google` matches "Google DeepMind", "Google Brain", etc.
- `Meta` matches "Meta", "Meta FAIR", etc.

## 🎓 Understanding Results

Each result shows:

### 1. **Name** (Bold, large)
The researcher's full name

### 2. **Title**
Their current position or role

### 3. **Company | Location**
Where they work and where they're based

### 4. **About**
A brief description of their work, expertise, or background

### 5. **Current Role**
Additional details about what they're currently working on

### 6. **Metrics**
- 📚 Number of publications
- 📄 Number of patents

### 7. **Links**
Click to visit their profiles:
- 🔗 **LinkedIn** - Professional network
- 🎓 **Scholar** - Google Scholar (academic publications)
- 💻 **GitHub** - Code repositories
- 🐦 **Twitter** - Social media
- 🌐 **Website** - Personal website

## 💡 Pro Tips

### 1. **Combine Search Terms**

```
LLM Stanford         → LLM researchers at Stanford
computer vision Meta → CV researchers at Meta
safety alignment     → AI safety and alignment experts
```

### 2. **Use Natural Language**

The search understands context:
```
"working on transformers"
"experts in reinforcement learning"
"researchers focusing on computer vision"
```

### 3. **Filter by Attributes** (Coming Soon)

Future syntax will support:
```
@company:Google DeepMind
@location:"San Francisco"
@publications:>10
```

### 4. **Quick Filters**

Instead of typing, use the checkbox:
- ☑️ Show all organizations → See everyone
- ☐ Show all organizations → Filter by specific company

### 5. **Scan Efficiently**

The list format makes it easy to:
- Quickly scan names
- Spot key organizations
- Find publication counts
- See all links at a glance

## 📊 Performance

- **Search Speed**: Results in ~50-300ms
- **Auto-update**: Results refresh automatically as you type
- **Debounced**: 300ms delay prevents too many searches while typing

## 🔗 Quick Actions

### View Full Profile
Click any social link to visit that platform

### Find Similar Researchers
Note the keywords in their description and search for those

### Export Results (Coming Soon)
Copy-paste names and info, or use future export feature

## 🎨 Interface Elements

### Green Banner
Shows result count and search time:
```
Found 14 results (0.43 ms)
```

### Loading State
Spinning circle appears while searching

### Empty State
If no results found, try:
- Different keywords
- Broader search terms
- Check spelling
- Remove filters

## 🚀 Advanced Usage

### Finding Specific Skills

```
pytorch deep learning
tensorflow computer vision
JAX neural networks
```

### Finding by Institution

```
MIT Stanford Berkeley → Academic researchers
Google Meta OpenAI    → Industry researchers
```

### Finding by Domain

```
healthcare AI
robotics
autonomous vehicles
drug discovery
```

### Finding by Seniority

```
principal researcher
senior staff
research scientist
director
```

## 📝 Examples by Use Case

### 1. **Recruiting for ML Role**

Search: `computer vision deep learning`
Filter: Leave "Show all organizations" checked
Action: Browse results, check LinkedIn profiles

### 2. **Finding Research Collaborators**

Search: `[your research area]`
Filter: Specific universities or companies
Action: Check Google Scholar, reach out

### 3. **Market Research**

Search: `[technology]`
Filter: Show all to see distribution
Action: Note which companies have most experts

### 4. **Learning from Experts**

Search: `[topic you're learning]`
Action: Check their GitHub, personal websites, publications

### 5. **Following Research Trends**

Search: `emerging topics` (e.g., "diffusion models")
Action: See who's working on cutting-edge tech

## ⚡ Keyboard Shortcuts

- **Enter** - Trigger search (though it auto-searches as you type)
- **Tab** - Navigate through interface
- **Ctrl/Cmd + Click** on link - Open in new tab

## 🐛 Troubleshooting

### No Results?
- Try broader search terms
- Check spelling
- Remove company filter
- Try synonyms (e.g., "NLP" vs "natural language processing")

### Slow Search?
- First search generates embeddings (1-time, takes 2-3 min)
- Subsequent searches are instant

### Wrong Results?
- Use exact phrases with quotes
- Add more specific keywords
- Use company filter

## 📞 Support

For issues or questions:
1. Check the README.md
2. Check the QUICKSTART.md
3. Review error messages in browser console

---

**Happy searching! Find the perfect AI talent for your team or research.** 🎉
