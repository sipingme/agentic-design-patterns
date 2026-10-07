const sidebars = {
  docs: [
    { type: 'doc', id: 'index', label: '开始阅读' },
    { type: 'doc', id: 'learning-guide', label: '阅读指南' },
    { type: 'doc', id: 'chapter-directory', label: '章节目录' },
    {
      type: 'category',
      label: '第一章 提示链',
      items: [
        'chapters/chapter-01/1.1-提示链模式概述',
        'chapters/chapter-01/1.2-实际应用与案例',
        'chapters/chapter-01/1.3-实践代码示例',
        'chapters/chapter-01/1.4-上下文工程与提示词工程',
      ],
    },
    {
      type: 'category',
      label: '第二章 路由',
      items: [
        'chapters/chapter-02/overview',
        'chapters/chapter-02/2.1-路由模式概述',
        'chapters/chapter-02/2.2-实际应用与案例',
        'chapters/chapter-02/2.3-实践代码示例',
      ],
    },
    {
      type: 'category',
      label: '第三章',
      items: ['chapters/chapter-03/overview'],
    },
  ],
};

module.exports = sidebars;
